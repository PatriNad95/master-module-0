import { describe } from 'node:test'
import { expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'

describe('HelloWorld component', () => {
  it('should render correctly', () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'Hello World',
      },
    })
    expect(wrapper.text()).toContain('Hello World')
  })

  it('emits the salute event', () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'Hello World',
      },
    })
    const button = wrapper.find('button')
    button.trigger('click')
    const emittedEvents = wrapper.emitted()
    // expect(emittedEvents['salute']).toBeTruthy()
    expect(emittedEvents).toHaveProperty('salute')
  })
})
