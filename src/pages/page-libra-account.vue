<template>
  <f7-page name="page-libra-account" ptr @ptr:refresh="refreshOnPull">

    <f7-navbar no-shadow color=white text-color="black">
      <f7-nav-left>
        <f7-link icon-f7="arrow_left" back></f7-link>
      </f7-nav-left>
      <f7-nav-title> Outgoing transactions </f7-nav-title>
      <f7-nav-right>
        <f7-link icon-if-md="material:send" @click="transfer()"/>
      </f7-nav-right>
