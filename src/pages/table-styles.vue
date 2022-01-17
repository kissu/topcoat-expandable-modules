<template>
  <t-style condition="7 > 5" if-true="text-success-500" if-false="text-error-500">
    truthy + nested div
  </t-style>
  <t-style condition="3 > 5" if-true="text-success-500" if-false="text-error-500">
    falsy + nested div
  </t-style>
  <t-style>will not have a div around</t-style>
</template>
