<script>
import { defineComponent, ref } from 'vue'

export default {
  setup() {
    const SimpleButton = defineComponent({
      name: 'CoolSimpleButton',
      props: {
        count: {
          type: Number,
          default: 2,
        },
      },

      setup() {
        const refCounter = ref(0)
        return { refCounter }
      },

      render() {
        const topLabel = h('p', `current counter: ${this.count}`)
        const refButton = h(
          'button',
          { class: ['bg-error-500', 'p-2', 'rounded-md', 'm-2'] },
          `click to increase ${this.refCounter}`,
        )

        return h(
          'div',
          {
            onClick: () => {
              console.log(this.count)
              this.refCounter += 1
            },
          },
          [topLabel, refButton, this.$slots.default ? this.$slots.default() : []],
        )
      },
    })

    return () => [h(SimpleButton, { count: 5, class: ['bg-primary-500', 'w-48', 'mx-auto'] }, () => null)]
  },
}
</script>
