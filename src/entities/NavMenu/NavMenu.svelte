<script>
  import block from 'bem-cn';

  import './NavMenu.scss';

  export let menuItems;
  export let direction;
  export let linkClickHandler = () => {};

  let b = block('NavMenu');
</script>

<nav class={b({ horizontal: direction === 'horizontal', vertical: direction === 'vertical' })}>
  {#each menuItems as item }    
    <a class={b('item')} href={item.link} on:click={linkClickHandler}>
      <img class={b('icon')} src={item.image} alt="Иконка пункта меню" />
      <p class={b('text')}>{item.text}</p>
    </a>
  {/each}
</nav>