const state = {
	vuex_tabbarList: [{
			iconPath: '/static/resources/tabbar/home1.png',
			selectedIconPath: '/static/resources/tabbar/home2.png',
			text: '首页',
						pagePath: "/pages/index/index"
		},
		{
			iconPath: '/static/resources/tabbar/subject1.png',
			selectedIconPath: '/static/resources/tabbar/subject2.png',
			text: '专业',
			pagePath: "/pages/subject/subject"
		},
		{
			iconPath: '/static/resources/tabbar/university1.png',
			selectedIconPath: '/static/resources/tabbar/university2.png',
			text: '大学院',
			midButton: true,
				pagePath: "/pages/college/college"
		},
		{
			iconPath: '/static/resources/tabbar/system1.png',
			selectedIconPath: '/static/resources/tabbar/system2.png',
			text: '培训机构',
			pagePath: "/pages/mechanism/mechanism"
		},
		{
			iconPath: '/static/resources/tabbar/my1.png',
			selectedIconPath: '/static/resources/tabbar/my2.png',
			text: '我的',
			count: 23,
			isDot: false,
			customIcon: false,
			pagePath: "/pages/mine/mine"
		}
	]

}

export default state
