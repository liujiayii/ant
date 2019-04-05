let extendsRoutes = [{
  path: '/',
  Ico: 'home',
  component: () => import('@/views/layout/layout'),
  children: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/home')
    }]
}, {
  path: '/subnav1',
  name: 'subnav1',
  Ico: 'user',
  component: () => import('@/views/layout/layout'),
  children: [
    {
      path: 'option1',
      name: 'option1',
      component: () => import('@/views/test/option1'),
      meta: {title: 'subnav1'}
    }, {
      path: 'option2',
      name: 'option2',
      component: () => import('@/views/test/option2'),
      meta: {title: 'subnav1'}
    }, {
      path: 'option3',
      name: 'option3',
      component: () => import('@/views/test/option3'),
      meta: {title: 'subnav1'}
    }]
}, {
  path: '/subnav2',
  name: 'subnav2',
  Ico: 'laptop',
  component: () => import('@/views/layout/layout'),
  children: [
    {
      path: 'option4',
      name: 'option4',
      component: () => import('@/views/test/option4'),
      meta: {title: 'subnav2'}
    }, {
      path: 'option5',
      name: 'option5',
      component: () => import('@/views/test/option5'),
      meta: {title: 'subnav2'}
    }, {
      path: 'option6',
      name: 'option6',
      component: () => import('@/views/test/option6'),
      meta: {title: 'subnav2'}
    }]
}]

export default {extendsRoutes}
