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
 <f7-searchbar
        class="searchbar"
        expandable
        search-container="[data-name='page-libra-account'] .searchbar-list"
        search-in=".item-title"
      />
    </f7-navbar>

   <f7-block class="text-align-center">
      <h1 v-fade-in>
        &nbsp;
        <span v-if="balance != undefined"> Total: {{ balance }} coins</span> 
        &nbsp;
      </h1>
      <span>
        &nbsp;
        <span v-if="txList.length != 0"> num of transactions: {{ txList.length }}</span>
        &nbsp;
      </span>
    </f7-block>

    <f7-list no-hairlines class="text-align-center">
      <f7-list-button @click="accountMint()">
        MINT COINS ...
      </f7-list-button>
    </f7-list>
   
   <f7-list no-hairlines class="searchbar-list">
      <f7-list-item
        v-for="(tx) in txList"
        :header="'Exp.' + txExpTime(tx) + ' Seq. number: ' + tx.rawTxn.sequenceNumber"
        :title="tx.rawTxn.payload.args.ADDRESS"
        :footer="'tx/contract:' + tx.rawTxn.payload.transaction"
        @click="showTx(tx)"
      >
