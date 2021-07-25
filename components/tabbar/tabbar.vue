<template>
	<u-tabbar :icon-size="38" :mid-button-size="68" v-model="value" :list="vuex_tabbarList" :mid-button="true"></u-tabbar>
</template>

<script>
import { mapState } from 'vuex';
export default {
	props: {
		value: {
			type: [String, Number],
			default: 0
		},
	},
	computed: {
		...mapState({
			vuex_tabbarList: state => state.tabbar.vuex_tabbarList
		})
	},
	data() {
		return {

		};
	}
};
</script>
