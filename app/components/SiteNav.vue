<template>
  <header class="top">
    <div class="brand">
      <img class="brand-logo" src="/img/logo.png" alt="International Research Competition logo" />
    </div>

    <button
      class="mobile-menu-btn"
      type="button"
      :aria-expanded="mobileMenuOpen"
      aria-label="Toggle navigation menu"
      @click="toggleMobileMenu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <nav class="top-nav" aria-label="Primary">
      <ul class="nav-list nav-list-desktop">
        <li
          v-for="item in siteNav"
          :key="item.to"
          class="nav-item"
          :class="{
            'has-children': item.children?.length,
            'is-active': isActive(item),
            'is-open': openItem === item.to
          }"
        >
          <NuxtLink :to="item.to" class="nav-link">
            {{ item.label }}
          </NuxtLink>
          <button
            v-if="item.children?.length"
            class="nav-toggle"
            type="button"
            :aria-expanded="openItem === item.to"
            :aria-label="`Toggle ${item.label} submenu`"
            @click="toggleItem(item.to)"
          >
            <span aria-hidden="true">▾</span>
          </button>
          <div v-if="item.children?.length" class="nav-submenu" role="menu">
            <NuxtLink
              v-for="child in item.children"
              :key="child.to"
              :to="child.to"
              class="nav-sublink"
              role="menuitem"
            >
              {{ child.label }}
            </NuxtLink>
          </div>
        </li>
      </ul>

      <transition name="mobile-nav">
        <div v-if="mobileMenuOpen" class="mobile-nav-panel">
          <div
            v-for="item in siteNav"
            :key="item.to"
            class="mobile-nav-item"
            :class="{ 'is-open': mobileOpenItem === item.to }"
          >
            <div class="mobile-nav-row">
              <NuxtLink :to="item.to" class="mobile-nav-link" @click="closeMobileMenu">
                {{ item.label }}
              </NuxtLink>
              <button
                v-if="item.children?.length"
                class="mobile-nav-toggle"
                type="button"
                :aria-expanded="mobileOpenItem === item.to"
                :aria-label="`Toggle ${item.label} submenu`"
                @click="toggleMobileItem(item.to)"
              >
                <span aria-hidden="true">▾</span>
              </button>
            </div>

            <div v-if="item.children?.length && mobileOpenItem === item.to" class="mobile-nav-submenu">
              <NuxtLink
                v-for="child in item.children"
                :key="child.to"
                :to="child.to"
                class="mobile-nav-sublink"
                @click="closeMobileMenu"
              >
                {{ child.label }}
              </NuxtLink>
            </div>
          </div>

          <button class="nav-cta mobile-nav-cta" type="button">Register</button>
        </div>
      </transition>
    </nav>

    <button class="nav-cta" type="button">Register</button>
  </header>
</template>

<script setup lang="ts">
import { siteNav, type NavItem } from "../data/siteNav";

const route = useRoute();
const openItem = ref<string | null>(null);
const mobileMenuOpen = ref(false);
const mobileOpenItem = ref<string | null>(null);

const isActive = (item: NavItem) => {
  if (route.path === item.to) {
    return true;
  }

  if (item.children?.some((child) => route.path === child.to)) {
    return true;
  }

  return route.path.startsWith(`${item.to}/`);
};

const toggleItem = (key: string) => {
  openItem.value = openItem.value === key ? null : key;
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  if (!mobileMenuOpen.value) {
    mobileOpenItem.value = null;
  }
};

const toggleMobileItem = (key: string) => {
  mobileOpenItem.value = mobileOpenItem.value === key ? null : key;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
  mobileOpenItem.value = null;
};

watch(
  () => route.path,
  () => {
    closeMobileMenu();
  }
);
</script>

<style scoped>
.top {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  z-index: 9999;
  gap: 1.25rem;
  flex-wrap: nowrap;
}

.mobile-menu-btn {
  display: none;
  border: 1px solid rgba(31, 27, 21, 0.16);
  background: rgba(255, 255, 255, 0.88);
  border-radius: 16px;
  width: 54px;
  height: 54px;
  padding: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.3rem;
  cursor: pointer;
  box-shadow: 0 14px 28px rgba(60, 47, 32, 0.08);
}

.mobile-menu-btn span {
  display: block;
  width: 20px;
  height: 2px;
  border-radius: 999px;
  background: #1f1b15;
}

.brand {
  display: flex;
  align-items: center;
  min-width: 112px;
  flex: 0 0 auto;
}

.brand-logo {
  width: 112px;
  height: 112px;
  object-fit: contain;
}

.top-nav {
  flex: 1 1 auto;
  min-width: 0;
  max-width: 100%;
  position: relative;
  z-index: 9999;
}

.nav-list {
  list-style: none;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 1rem 1.85rem;
  padding: 0;
  margin: 0;
}

.mobile-nav-panel {
  display: none;
}

.nav-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  z-index: 9999;
  padding-bottom: 0.6rem;
}

.nav-link {
  color: #1f1b15;
  text-decoration: none;
  font-size: 0.77rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  border-bottom: 1px solid transparent;
  padding-bottom: 0.2rem;
  transition: border-color 160ms ease;
  white-space: nowrap;
}

.nav-item.is-active .nav-link,
.nav-link:hover,
.nav-link:focus {
  border-bottom-color: #1f1b15;
}

.nav-submenu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 220px;
  display: grid;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.96);
  padding: 0.9rem 1rem;
  border-radius: 16px;
  box-shadow: 0 16px 30px rgba(60, 47, 32, 0.16);
  opacity: 0;
  transform: translateY(6px);
  pointer-events: none;
  transition: opacity 160ms ease, transform 160ms ease;
  z-index: 10000;
}

.nav-item.has-children:hover .nav-submenu,
.nav-item.has-children:focus-within .nav-submenu,
.nav-item.is-open .nav-submenu {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.nav-sublink {
  color: #2b231a;
  text-decoration: none;
  font-size: 0.86rem;
  padding: 0.35rem 0.2rem;
  border-radius: 8px;
  transition: background-color 160ms ease;
}

.nav-sublink:hover,
.nav-sublink:focus {
  background: rgba(163, 123, 75, 0.12);
}

.nav-toggle {
  border: none;
  background: transparent;
  color: #1f1b15;
  font-size: 0.9rem;
  cursor: pointer;
  padding: 0.2rem 0.35rem;
  line-height: 1;
}

.nav-toggle:focus-visible {
  outline: 2px solid rgba(31, 27, 21, 0.35);
  outline-offset: 2px;
  border-radius: 6px;
}

.nav-cta {
  border: 1px solid #a37b4b;
  background: #ffffff;
  color: #a37b4b;
  padding: 0.55rem 1.2rem;
  border-radius: 999px;
  font-size: 0.77rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 160ms ease, transform 160ms ease;
  flex: 0 0 auto;
}

.nav-cta:hover,
.nav-cta:focus {
  background: #f1ede6;
  transform: translateY(-1px);
}

@media (max-width: 1100px) {
  .top {
    gap: 0.95rem;
  }

  .brand {
    min-width: 96px;
  }

  .brand-logo {
    width: 96px;
    height: 96px;
  }

  .nav-list {
    gap: 0.85rem 1.25rem;
  }

  .nav-link {
    font-size: 0.72rem;
    letter-spacing: 0.05em;
  }

  .nav-cta {
    padding: 0.5rem 1rem;
    font-size: 0.72rem;
  }
}

@media (max-width: 900px) {
  .top {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
    column-gap: 1rem;
    row-gap: 0.75rem;
  }

  .brand {
    min-width: 0;
    grid-column: 1;
    grid-row: 1;
    flex: none;
  }

  .brand-logo {
    width: 88px;
    height: 88px;
  }

  .mobile-menu-btn {
    display: inline-flex;
    grid-column: 2;
    grid-row: 1;
    justify-self: end;
    flex: none;
  }

  .top-nav {
    position: relative;
    grid-column: 1 / -1;
    grid-row: 2;
    width: 100%;
    min-width: 0;
    max-width: none;
    flex: none;
  }

  .nav-list-desktop,
  .top > .nav-cta {
    display: none;
  }

  .mobile-nav-panel {
    display: grid;
    gap: 0.6rem;
    position: static;
    width: 100%;
    padding: 1rem;
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.96);
    border: 1px solid rgba(60, 47, 32, 0.12);
    box-shadow: 0 22px 42px rgba(60, 47, 32, 0.18);
    backdrop-filter: blur(10px);
  }

  .mobile-nav-item {
    display: grid;
    gap: 0.42rem;
  }

  .mobile-nav-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
    gap: 0.6rem;
  }

  .mobile-nav-link,
  .mobile-nav-sublink {
    text-decoration: none;
    color: #1f1b15;
  }

  .mobile-nav-link {
    display: block;
    padding: 0.72rem 0.82rem;
    border-radius: 14px;
    background: rgba(243, 242, 237, 0.92);
    font-size: 0.82rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .mobile-nav-toggle {
    border: 1px solid rgba(31, 27, 21, 0.12);
    background: rgba(243, 242, 237, 0.92);
    color: #1f1b15;
    width: 42px;
    height: 42px;
    border-radius: 14px;
    cursor: pointer;
  }

  .mobile-nav-submenu {
    display: grid;
    gap: 0.36rem;
    padding-left: 0.4rem;
  }

  .mobile-nav-sublink {
    display: block;
    padding: 0.58rem 0.82rem;
    border-radius: 12px;
    background: rgba(236, 231, 224, 0.86);
    font-size: 0.8rem;
    color: #3b2f24;
  }

  .mobile-nav-cta {
    width: 100%;
    justify-self: stretch;
    margin-top: 0.25rem;
  }
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: opacity 160ms ease, transform 160ms ease;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 560px) {
  .top {
    column-gap: 0.75rem;
    row-gap: 0.65rem;
  }

  .brand {
    min-width: 0;
  }

  .brand-logo {
    width: 76px;
    height: 76px;
  }

  .mobile-menu-btn {
    width: 48px;
    height: 48px;
  }

  .mobile-nav-panel {
    width: min(92vw, 340px);
    top: calc(100% + 0.7rem);
  }
}
</style>
