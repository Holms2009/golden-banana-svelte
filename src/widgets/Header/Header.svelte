<script lang="ts">
  import { block } from "bem-cn";

  import './Header.scss';
  import gameLogo from '../../assets/img/ShopTitans_Logo_RGB.png';

  import mainMenu from "../../shared/config/mainMenu";
  import NavMenu from "../../entities/NavMenu/NavMenu.svelte";
  import MobileMenu from "../../features/MobileMenu/MobileMenu.svelte";
  import MediaQuery from "../../shared/ui/MediaQuery/MediaQuery.svelte";


  let b = block('Header');
  let showGMForm = false;
</script>

<div class={b()}>
  <div class={b('logos')}>
    <a class={b('logo-link')} href="https://playshoptitans.com/" target='_blank' rel="noreferrer">
      <img class={b('game-logo')} src={gameLogo} alt="Shop Titans logo" />
    </a>
  </div>

  <MediaQuery query="(max-width: 768px)" let:matches>
    {#if !matches}
      <button class={b('gm-state-toggle')} on:click={() => {showGMForm = !showGMForm}}/>
    {/if}
  </MediaQuery>

  <MediaQuery query="(max-width: 768px)" let:matches>
    {#if !matches}
      <NavMenu menuItems={mainMenu} direction='horizontal' />
    {:else}
      <MobileMenu />
    {/if}
  </MediaQuery>

  <!-- {#if showGMForm}
      <form class={b('gm-form')} action="POST" on:submit={handleSubmit}>
        <input class={b('gm-password')} type="password" name='password' />
        <YellowButton text="Подтвердить" type="submit" />
      </form>
  {/if} -->
  <div class={b('logo-text')}></div>
</div>