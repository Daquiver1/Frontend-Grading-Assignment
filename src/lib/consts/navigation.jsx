import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	// {
	// 	key: 'Login',
	// 	label: 'Login',
	// 	path: '/Login',
	// 	icon: <HiOutlineCube />
	// },
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
        
        
	},
	{
		key: 'GradeReport',
		label: 'GradeReport',
		path: '/grade-report',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'Missing Grade Form',
		label: 'Missing Grade Form',
		path: '/missing-grade-form',
		icon: <HiOutlineUsers />
	},
	{
		key: 'Instructor Contact',
		label: 'Instructor Contact',
		path: '/Instructor Contact',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'messages',
		label: 'Messages',
		path: '/messages',
		icon: <HiOutlineAnnotation />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
    
]