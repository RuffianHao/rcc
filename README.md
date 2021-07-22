uniapp  遇到的问题
1.uview 使用自定义tabbar时
	报错Cannot read property 'bottom' of null的解决方法
	原因：吸顶组件u-sticky和底部导航栏tabbar切换页面时产生冲突，
			sticky组件创建了Observer监听，当切换页面且页面没有销毁时，导致组件仍然保持监听，所以出现报错。
				所以我们需要手动断开Observer监听来解决这个报错的问题
	解决：<u-sticky :enable="enable"> onLoad时为true  onHIde时为false