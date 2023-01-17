<script lang="ts">
  import { block } from "bem-cn";

  import "./MobileMenu.scss";
  import gameLogo from "../../assets/img/ShopTitans_Logo_RGB.png";

  import NavMenu from "../../entities/NavMenu/NavMenu.svelte";
  import mainMenu from "../../shared/config/mainMenu";

  let b = block("MobileMenu");
  let isVisible = false;

  function changeVisibility(state: boolean) {
    isVisible = state;
  }
</script>

<div class={b()}>
  <button class={b("burger")} on:click={() => changeVisibility(true)}>
    <span class={b("line")} />
    <span class={b("line")} />
    <span class={b("line")} />
  </button>
  <div class={b("menu", { closed: !isVisible })}>
    <NavMenu
      menuItems={mainMenu}
      direction="vertical"
      linkClickHandler={() => changeVisibility(false)}
    />
    <button class={b("close")} on:click={() => (isVisible = false)} />
    <a
      class={b("logo-link")}
      href="https://playshoptitans.com/"
      target="_blank"
      rel="noreferrer"
    >
      <img class={b("game-logo")} src={gameLogo} alt="Shop Titans logo" />
    </a>
  </div>
  <div
    class={b("bg-cover", { hidden: !isVisible })}
    on:click={() => changeVisibility(false)}
    aria-hidden
  />
</div>
