//doc https://github.com/TehShrike/deepmerge#mergeallarrayofobjects-options
import merge from 'deepmerge'

import { commonMixin } from '~/mixins/common'
import { layerMixin } from '~/mixins/layers'
import { libraryMixin } from '~/mixins/library'
import { visualizationMixin } from '~/mixins/visualization'

// in case of a collision, the last mixin wins and no override by an empty option field neither
const mergeOptions = { arrayMerge: true }

export const globalMixins = merge.all(
  [commonMixin, layerMixin, libraryMixin, visualizationMixin],
  mergeOptions,
)
