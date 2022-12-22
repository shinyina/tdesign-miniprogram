export default {
  docs: [
    {
      title: '开始',
      type: 'document', // 普通文档
      children: [
        {
          title: '快速开始',
          name: 'getting-started',
          meta: { docType: 'explain' },
          path: '/miniprogram/getting-started',
          component: () => import('@docs/getting-started.md'),
        },
        {
          title: '贡献指南',
          name: 'develop',
          meta: { docType: 'explain' },
          path: '/miniprogram/develop',
          component: () => import('@/../CONTRIBUTING.md'),
        },
        {
          title: '谁在用',
          name: 'used',
          meta: { docType: 'explain' },
          path: '/miniprogram/used',
          component: () => import('@/../USED.md'),
        },
        {
          title: '更新日志',
          name: 'changelog',
          meta: { docType: 'explain' },
          path: '/miniprogram/changelog',
          component: () => import('~/CHANGELOG.md'),
        },
        {
          title: '自定义主题',
          name: 'custom-theme',
          meta: { docType: 'explain' },
          path: '/miniprogram/custom-theme',
          component: () => import('@docs/custom-theme.md'),
        },
        {
          title: '组件概览',
          name: 'overview',
          meta: { docType: 'explain' },
          path: '/miniprogram/overview',
          component: () => import('@docs/overview.md'),
        },
      ],
    },
    {
      title: '基础',
      type: 'component', // 组件文档
      children: [
        {
          title: 'Button 按钮',
          name: 'button',
          meta: { docType: 'base' },
          path: '/miniprogram/components/button',
          component: () => import('@/button/README.md'),
        },
        {
          title: 'Fab 悬浮按钮',
          name: 'fab',
          meta: { docType: 'form' },
          path: '/miniprogram/components/fab',
          component: () => import('@/fab/README.md'),
        },
        {
          title: 'Icon 图标',
          name: 'icon',
          meta: { docType: 'base' },
          path: '/miniprogram/components/icon',
          component: () => import('@/icon/README.md'),
        },
        {
          title: 'Link 链接',
          name: 'link',
          meta: { docType: 'base' },
          path: '/miniprogram/components/link',
          component: () => import('@/link/README.md'),
        },
      ],
    },
    {
      title: '布局',
      type: 'component', // 组件文档
      children: [
        {
          title: 'Cell 单元格',
          name: 'cell',
          meta: { docType: 'data' },
          path: '/miniprogram/components/cell',
          component: () => import('@/cell/README.md'),
        },
        {
          title: 'Divider 分割线',
          name: 'divider',
          meta: { docType: 'data' },
          path: '/miniprogram/components/divider',
          component: () => import('@/divider/README.md'),
        },
        {
          title: 'Grid 宫格',
          name: 'grid',
          meta: { docType: 'data' },
          path: '/miniprogram/components/grid',
          component: () => import('@/grid/README.md'),
        },
      ],
    },
    {
      title: '导航',
      type: 'component',
      children: [
        {
          title: 'BackTop 返回顶部',
          name: 'back-top',
          meta: { docType: 'navigation' },
          path: '/miniprogram/components/back-top',
          component: () => import('@/back-top/README.md'),
        },
        {
          title: 'Drawer 抽屉',
          name: 'drawer',
          meta: { docType: 'navigation' },
          path: '/miniprogram/components/drawer',
          component: () => import('@/drawer/README.md'),
        },
        {
          title: 'Indexes 索引',
          name: 'indexes',
          meta: { docType: 'navigation' },
          path: '/miniprogram/components/indexes',
          component: () => import('@/indexes/README.md'),
        },
        {
          title: 'Navbar 导航条',
          name: 'navbar',
          meta: { docType: 'navigation' },
          path: '/miniprogram/components/navbar',
          component: () => import('@/navbar/README.md'),
        },
        {
          title: 'SideBar 侧边导航',
          name: 'sidebar',
          meta: { docType: 'navigation' },
          path: '/miniprogram/components/side-bar',
          component: () => import('@/side-bar/README.md'),
        },
        {
          title: 'Steps 步骤条',
          name: 'steps',
          meta: { docType: 'navigation' },
          path: '/miniprogram/components/steps',
          component: () => import('@/steps/README.md'),
        },
        {
          title: 'Sticky 吸顶容器',
          name: 'sticky',
          meta: { docType: 'navigation' },
          path: '/miniprogram/components/sticky',
          component: () => import('@/sticky/README.md'),
        },
        {
          title: 'TabBar 标签栏',
          name: 'tabbar',
          meta: { docType: 'navigation' },
          path: '/miniprogram/components/tab-bar',
          component: () => import('@/tab-bar/README.md'),
        },
        {
          title: 'Tabs 选项卡',
          name: 'tabs',
          meta: { docType: 'navigation' },
          path: '/miniprogram/components/tabs',
          component: () => import('@/tabs/README.md'),
        },
      ],
    },
    {
      title: '输入',
      type: 'component',
      children: [
        {
          title: 'Calendar 日历',
          name: 'calendar',
          meta: { docType: 'form' },
          path: '/miniprogram/components/calendar',
          component: () => import('@/calendar/README.md'),
        },
        {
          title: 'Cascader 级联选择器',
          name: 'cascader',
          meta: { docType: 'form' },
          path: '/miniprogram/components/cascader',
          component: () => import('@/cascader/README.md'),
        },
        {
          title: 'CheckBox 复选框',
          name: 'checkbox',
          meta: { docType: 'form' },
          path: '/miniprogram/components/checkbox',
          component: () => import('@/checkbox/README.md'),
        },
        {
          title: 'DateTimePicker 时间选择器',
          name: 'dateTimePicker',
          meta: { docType: 'form' },
          path: '/miniprogram/components/date-time-picker',
          component: () => import('@/date-time-picker/README.md'),
        },
        {
          title: 'Input 输入框',
          name: 'input',
          meta: { docType: 'form' },
          path: '/miniprogram/components/input',
          component: () => import('@/input/README.md'),
        },
        {
          title: 'Picker 选择器',
          name: 'picker',
          meta: { docType: 'form' },
          path: '/miniprogram/components/picker',
          component: () => import('@/picker/README.md'),
        },
        {
          title: 'Radio 单选框',
          name: 'radio',
          meta: { docType: 'form' },
          path: '/miniprogram/components/radio',
          component: () => import('@/radio/README.md'),
        },
        {
          title: 'Rate 评分',
          name: 'rate',
          meta: { docType: 'form' },
          path: '/miniprogram/components/rate',
          component: () => import('@/rate/README.md'),
        },
        {
          title: 'Search 搜索框',
          name: 'search',
          meta: { docType: 'form' },
          path: '/miniprogram/components/search',
          component: () => import('@/search/README.md'),
        },
        {
          title: 'Slider 滑动选择器',
          name: 'slider',
          meta: { docType: 'form' },
          path: '/miniprogram/components/slider',
          component: () => import('@/slider/README.md'),
        },
        {
          title: 'Stepper 步进器',
          name: 'stepper',
          meta: { docType: 'form' },
          path: '/miniprogram/components/stepper',
          component: () => import('@/stepper/README.md'),
        },
        {
          title: 'Switch 开关',
          name: 'switch',
          meta: { docType: 'form' },
          path: '/miniprogram/components/switch',
          component: () => import('@/switch/README.md'),
        },
        {
          title: 'Textarea 多行文本框',
          name: 'textarea',
          meta: { docType: 'form' },
          path: '/miniprogram/components/textarea',
          component: () => import('@/textarea/README.md'),
        },
        {
          title: 'TreeSelect 树形选择',
          name: 'treeSelect',
          meta: { docType: 'form' },
          path: '/miniprogram/components/tree-select',
          component: () => import('@/tree-select/README.md'),
        },
        {
          title: 'UpLoad 上传',
          name: 'upload',
          meta: { docType: 'form' },
          path: '/miniprogram/components/upload',
          component: () => import('@/upload/README.md'),
        },
      ],
    },
    {
      title: '数据展示',
      type: 'component',
      children: [
        {
          title: 'Avatar 头像',
          name: 'avatar',
          meta: { docType: 'data' },
          path: '/miniprogram/components/avatar',
          component: () => import('@/avatar/README.md'),
        },
        {
          title: 'Badge 徽标',
          name: 'badge',
          meta: { docType: 'data' },
          path: '/miniprogram/components/badge',
          component: () => import('@/badge/README.md'),
        },
        {
          title: 'Collapse 折叠面板',
          name: 'collapse',
          meta: { docType: 'data' },
          path: '/miniprogram/components/collapse',
          component: () => import('@/collapse/README.md'),
        },
        {
          title: 'CountDown 倒计时',
          name: 'countdown',
          meta: { docType: 'data' },
          path: '/miniprogram/components/count-down',
          component: () => import('@/count-down/README.md'),
        },
        {
          title: 'Empty 空状态',
          name: 'empty',
          meta: { docType: 'data' },
          path: '/miniprogram/components/empty',
          component: () => import('@/empty/README.md'),
        },
        {
          title: 'Footer 页脚',
          name: 'footer',
          meta: { docType: 'data' },
          path: '/miniprogram/components/footer',
          component: () => import('@/footer/README.md'),
        },
        {
          title: 'Image 图片',
          name: 'image',
          meta: { docType: 'data' },
          path: '/miniprogram/components/image',
          component: () => import('@/image/README.md'),
        },
        {
          title: 'ImageViewer 图片预览',
          name: 'image-viewer',
          meta: { docType: 'data' },
          path: '/miniprogram/components/image-viewer',
          component: () => import('@/image-viewer/README.md'),
        },
        {
          title: 'Progress 进度条',
          name: 'progress',
          meta: { docType: 'message' },
          path: '/miniprogram/components/progress',
          component: () => import('@/progress/README.md'),
        },
        {
          title: 'Result 结果',
          name: 'result',
          meta: { docType: 'data' },
          path: '/miniprogram/components/result',
          component: () => import('@/result/README.md'),
        },
        {
          title: 'Skeleton 骨架屏',
          name: 'skeleton',
          meta: { docType: 'data' },
          path: '/miniprogram/components/skeleton',
          component: () => import('@/skeleton/README.md'),
        },
        {
          title: 'Swiper 轮播图',
          name: 'swiper',
          meta: { docType: 'data' },
          path: '/miniprogram/components/swiper',
          component: () => import('@/swiper/README.md'),
        },
        {
          title: 'Tag 标签',
          name: 'tag',
          meta: { docType: 'data' },
          path: '/miniprogram/components/tag',
          component: () => import('@/tag/README.md'),
        },
      ],
    },
    {
      title: '反馈',
      type: 'component', // 组件文档
      children: [
        {
          title: 'ActionSheet 动作面板',
          name: 'actionsheet',
          meta: { docType: 'message' },
          path: '/miniprogram/components/action-sheet',
          component: () => import('@/action-sheet/README.md'),
        },
        {
          title: 'Dialog 弹出框',
          name: 'dialog',
          meta: { docType: 'message' },
          path: '/miniprogram/components/dialog',
          component: () => import('@/dialog/README.md'),
        },
        {
          title: 'DropdownMenu 下拉菜单',
          name: 'dropdown-menu',
          meta: { docType: 'navigation' },
          path: '/miniprogram/components/dropdown-menu',
          component: () => import('@/dropdown-menu/README.md'),
        },
        {
          title: 'Loading 加载',
          name: 'loading',
          meta: { docType: 'message' },
          path: '/miniprogram/components/loading',
          component: () => import('@/loading/README.md'),
        },
        {
          title: 'Message 消息通知',
          name: 'message',
          meta: { docType: 'message' },
          path: '/miniprogram/components/message',
          component: () => import('@/message/README.md'),
        },
        {
          title: 'NoticeBar 公告栏',
          name: 'noticebar',
          meta: { docType: 'message' },
          path: '/miniprogram/components/notice-bar',
          component: () => import('@/notice-bar/README.md'),
        },
        {
          title: 'Overlay 遮罩层',
          name: 'overlay',
          meta: { docType: 'message' },
          path: '/miniprogram/components/overlay',
          component: () => import('@/overlay/README.md'),
        },
        {
          title: 'Popup 弹出层',
          name: 'popup',
          meta: { docType: 'message' },
          path: '/miniprogram/components/popup',
          component: () => import('@/popup/README.md'),
        },
        {
          title: 'PullDownRefresh 下拉刷新',
          name: 'pullDownRefresh',
          meta: { docType: 'message' },
          path: '/miniprogram/components/pull-down-refresh',
          component: () => import('@/pull-down-refresh/README.md'),
        },
        {
          title: 'SwipeCell 滑动操作',
          name: 'swipeCell',
          meta: { docType: 'message' },
          path: '/miniprogram/components/swipe-cell',
          component: () => import('@/swipe-cell/README.md'),
        },
        {
          title: 'Toast 轻提示',
          name: 'toast',
          meta: { docType: 'message' },
          path: '/miniprogram/components/toast',
          component: () => import('@/toast/README.md'),
        },
      ],
    },
  ],
};
