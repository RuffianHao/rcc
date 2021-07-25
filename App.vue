<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		}
	};
</script> 

<style lang="scss">
	@import "uview-ui/index.scss";
	page {
	    background-color: #f9f9f9;
	}
	.container {
	    position: relative;
	    width: 100%;
		height: 100%;
	    background-color: #f9f9f9;
	    overflow: hidden;
	    box-sizing: border-box;
	}
</style>
