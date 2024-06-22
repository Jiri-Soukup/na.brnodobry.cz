<template>
  <article class="
      flex-grow flex flex-row items-stretch justify-between
      bg-gray-200 dark:bg-gray-800 relative
    ">
    <FancyLine
      class="w-8 border-b-0 bg-repeat-y h-auto"
      :class="{'h-8': false}"
      style="background-size: 70% auto;"
      :style="{backgroundImage: `url(${require('~/assets/svg/line1-vertical.svg')})`}"
    />
    <client-only>
      <l-map
        @hook:mounted="mapInitialization"
        :zoom=14 :min-zoom=7
        :max-bounds="[[51.2, 12], [48.5, 19]]"
        :center="[49.1996122, 16.59]"
        ref="map"
        class="h-auto-important"
      >
        <!--        <l-tile-layer url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"></l-tile-layer>-->


        <!--                <l-tile-layer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>-->
        <!--        <l-tile-layer url="https://mapserver.mapy.cz/turist-m/{z}-{x}-{y}"></l-tile-layer>-->
        <!--        http://stamen-tiles-a.a.ssl.fastly.net/toner-lite/12/657/1591@2x.png-->

        <!-- <l-tile-layer url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"></l-tile-layer> -->
        <l-tile-layer url="s3://long-term.cache.maps.stamen.com/toner-lite/{z}/{x}/{y}.png"></l-tile-layer>
        <!--        <l-control-layers position="topright"></l-control-layers>-->

        <template
          v-for="p in places"
        >
          <l-marker
            v-if="p.fields.position"
            :key="p.sys.id"
            :lat-lng="[p.fields.position.lat, p.fields.position.lon]"
            :options="{title: p.fields.title}"
            @click="placeDetail = p"
          >
            <!--                    <l-popup @click.native="_placeDetail = p">{{ p.fields.title }}</l-popup>-->

            <l-icon
              :icon-url="require('../assets/svg/marker.svg')"
              :iconAnchor="[24/1.5, 64/1.5]"
              :iconSize="[48/1.5, 64/1.5]"
              class-name="black-to-primary dark:black-to-secondary"
            />
            <l-tooltip :options="{
              permanent: true,
              interactive: true,
              opacity: .9,
              direction: p.fields.tooltipDirection || 'auto'
            }">{{ p.fields.title }}
            </l-tooltip>
          </l-marker>
        </template>
        <!--        <LGPX-->
        <!--          :gpx-file="track"-->
        <!--          :gpx-options="gpxOptions"-->
        <!--        />-->
      </l-map>
    </client-only>
    <FancyLine
      class="w-8 border-b-0 bg-repeat-y h-auto"
      :class="{'h-8': false}"
      style="background-size: 70% auto;"
      :style="{backgroundImage: `url(${require('~/assets/svg/line1-vertical.svg')})`}"
    />
    <transition name="fade">
      <MapPlaceDetail
        v-if="placeDetail"
        :place="placeDetail"
        @close="placeDetail = null"
      />
    </transition>
  </article>
</template>

<script>
import {createClient} from "~/plugins/contentful";
import MapPlaceDetail from "@/components/MapPlaceDetail";
import _ from "lodash";

export default {
  name: "MapPage",
  components: {
    MapPlaceDetail,
    LGPX: process.client ? require('vue2-leaflet-gpx') : null,
  },
  transition: {
    name: 'page',
    mode: 'out-in'
  },
  async asyncData() {
    const client = createClient();
    const places = await client.getEntries({
      content_type: 'place',
      // order: '-sys.createdAt',
    });
    return {
      places: places.items.filter(p => p.fields.position),
      track: require('raw-loader!~/assets/gpx/main-train-to-vinarska.gpx').default,
    }
  },
  data() {
    return {
      placeDetail_: null,
      gpxOptions: {
        polyline_options: {
          color: '#f90093',
          opacity: 0.5,
          weight: 4,
          lineCap: 'round'
        },
        marker_options: {
          pointMatchers: process.client ? [
            {
              regex: /[^]*/,
              icon: this.$L.divIcon({className: 'h-10 w-10 bg-secondary rounded-full opacity-50'}),
            }
          ] : [],
          startIconUrl: require('assets/img/1x1-transparent.png'),
          endIconUrl: require('assets/img/1x1-transparent.png'),
          shadowUrl: require('assets/img/1x1-transparent.png'),
        },
      },
    }
  },
  head() {
    return {
      title: 'Map'
    };
  },
  computed: {
    placeDetail: {
      get() {
        return this.placeDetail_
      },
      set(p) {
        this.placeDetail_ = p
        this.$router.push({hash: p ? p.sys.id : ''})
        p && this.tryToFocusPlace(p)
      }
    }
  },
  methods: {
    mapInitialization() {
      const map = this.$refs.map

      map.fitBounds(this.places.map(p => [
        p.fields.position.lat,
        p.fields.position.lon,
      ]))
      this.placeDetail && this.tryToFocusPlace(this.placeDetail)
    },
    setPlaceById(id) {
      this.placeDetail = _.find(
        this.places,
        p => p.sys.id === id
      )
    },
    tryToFocusPlace(p) {
      this.$refs.map && this.$refs.map.mapObject.setView({
          lat: p.fields.position.lat - 0.0015,
          lng: p.fields.position.lon,
        },
        17,
        {animation: true}
      );
    }
  },
  mounted() {
    if (this.$route.hash) {
      this.setPlaceById(this.$route.hash.slice(1))
    }
  },
  watch: {
    $route(to, from) {
      if (to.hash === from.hash) return;
      this.setPlaceById(to.hash.slice(1))
    }
  }
}
</script>

<style>
.h-auto-important {
  height: auto !important;
}

.leaflet-popup-tip,
.leaflet-popup-content-wrapper {
  /*background: pink;*/
  /*color: red;*/
}

.dark .leaflet-tile-container img {
  /* inspired by https://github.com/xtk93x/Leaflet.TileLayer.ColorFilter */
  filter: hue-rotate(180deg) brightness(120%) invert(100%);
}

.leaflet-tooltip {
  @apply text-base p-2 border-4 border-primary bg-white
  hover:border-secondary

  dark:bg-gray-800 dark:text-white dark:font-medium;
}
</style>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 300ms;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
