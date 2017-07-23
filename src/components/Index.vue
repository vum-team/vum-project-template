<template>
  <div class="page">
    <simple-header title="my-vum" :back-link="true"></simple-header>
    <page-content>
      <div class="content-padded">
        <h1>Hello Vum!</h1>
      </div>
    </page-content>
  </div>
</template>

<script>
import Page from '../../node_modules/vum/src/components/page'
import {SimpleHeader} from '../../node_modules/vum/src/components/header'
import Content from '../../node_modules/vum/src/components/content'

export default {
  components: {
    Page,
    'page-content': Content,
    SimpleHeader
  }
}
</script>
