<script lang="ts">
  import { onMount } from "svelte";

  export let query: string;

  let media: MediaQueryList;
  let mediaListener;
  let wasMounted = false;
  let matches = false;

  onMount(() => {
    wasMounted = true;

    return () => {
      removeActiveListener();
    };
  });

  $: {
    if (wasMounted) {
      removeActiveListener();
      addNewListener(query);
    }
  }

  function addNewListener(queryString: string) {
    media = window.matchMedia(queryString);
    mediaListener = (evt: MediaQueryListEvent) => {
      matches = evt.matches;
    };
    media.addListener(mediaListener);
    matches = media.matches;
  }

  function removeActiveListener() {
    if (media && mediaListener) {
      media.removeListener(mediaListener);
    }
  }
</script>

<slot {matches} />
