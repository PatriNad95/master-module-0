import { beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ToDoList from './ToDoList.vue'
import { createPinia, setActivePinia } from 'pinia'

describe('ToDoList component', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should render correctly', () => {
    const wrapper = mount(ToDoList)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render correctly', () => {
    const wrapper = mount(ToDoList)
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<!--v-if-->
      <div><input type="checkbox" id="toggle-all"><label for="toggle-all">Show only pending</label></div>
      <hr>
      <ul class="max-w-[500px]"></ul>"
    `)
  })

  it('should render correctly', () => {
    const wrapper = mount(ToDoList)
    const label = wrapper.find('label')
    expect(label.text()).toMatchInlineSnapshot(`"Show only pending"`)
  })
})
