<template>
  <div class="hy-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :style="itemLayout"
              v-if="!item.isHidden"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  v-bind="item.otherOptions"
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  style="width: 100%"
                  v-model="formData[item.field]"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  v-model="formData[item.field]"
                >
                  <el-option
                    v-for="options in item.options"
                    :key="options.value"
                    :value="options.value"
                    :label="options.label"
                    style="width: 100%"
                    v-model="formData[item.field]"
                  ></el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  v-model="formData[item.field]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, PropType, ref, watch, defineEmits } from 'vue'
import { IFormItem } from '../types'
const Props = defineProps({
  formItems: {
    type: Array as PropType<IFormItem[]>,
    default: () => []
  },
  labelWidth: {
    type: String,
    default: '100px'
  },
  itemLayout: {
    type: Object,
    default: () => ({
      padding: '10px 40px'
    })
  },
  colLayout: {
    type: Object,
    default: () => ({
      xl: 6, // 1920 => 4个
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    })
  },
  modelValue: {
    type: Object,
    requried: true
  }
})
const formData = ref({ ...Props.modelValue })
const Emits = defineEmits(['update:modelValue'])
watch(
  formData,
  (newValue) => {
    console.log(newValue)
    Emits('update:modelValue', newValue)
  },
  {
    deep: true
  }
)
</script>
<style lang="less" scoped>
.hy-form {
  padding-top: 22px;
}
</style>
