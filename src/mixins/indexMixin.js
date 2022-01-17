//doc https://github.com/TehShrike/deepmerge#mergeallarrayofobjects-options
import merge from 'deepmerge'

import { commonMixin } from '~/mixins/commonMixin'
import { layerMixin } from '~/mixins/layersMixin'
import { libraryMixin } from '~/mixins/libraryMixin'
import { visualizationMixin } from '~/mixins/visualizationMixin'

// in case of a collision, the last mixin wins and no override by an empty option field neither
const mergeOptions = { arrayMerge: true }

export const globalMixins = merge.all(
  [commonMixin, layerMixin, libraryMixin, visualizationMixin],
  mergeOptions,
)
