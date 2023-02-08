<template>
  <div>
    <p>{{info.name}}</p>
    <p>사업자등록번호 : {{info.corpno}}</p>
    <p>{{info.address}}</p>
    <p>전화문의 : {{info.tel}}</p>
    <p>이메일 : {{info.email}}</p>
  </div>
</template>

<script>
import businessInfo from "@/info.json"
export default {
  data() {
    return {
      info: businessInfo
    }
  }
}
</script>
