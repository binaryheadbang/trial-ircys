<template>
  <nav class="section-subnav" aria-label="Competition pages">
    <NuxtLink
      v-for="item in links"
      :key="item.to"
      :to="item.to"
      class="subnav-link"
      :class="{ 'is-active': route.path === item.to }"
    >
      {{ item.label }}
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute();

const links = [
  { label: "Eligibility", to: "/competition/eligibility" },
  { label: "Categories", to: "/competition/categories" },
  { label: "Competition Stages", to: "/competition/competition-stages" },
  { label: "Grand Final Mechanism", to: "/competition/grand-final-mechanism" },
  { label: "Timeline", to: "/competition/timeline" },
  { label: "Fee and Payment Policy", to: "/competition/fee-and-payment-policy" },
  { label: "Hospitality", to: "/competition/hospitality" },
  { label: "Rules and Regulation", to: "/competition/rules-and-regulation" },
];
</script>

<style scoped>
.section-subnav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
}

.subnav-link {
  text-decoration: none;
  color: #2e2419;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(123, 90, 54, 0.25);
  padding: 0.5rem 0.9rem;
  border-radius: 999px;
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: background-color 160ms ease, border-color 160ms ease;
}

.subnav-link:hover,
.subnav-link:focus {
  background: rgba(241, 233, 223, 0.95);
  border-color: rgba(123, 90, 54, 0.55);
}

.subnav-link.is-active {
  background: #2e2419;
  color: #f6eee0;
  border-color: #2e2419;
}
</style>
