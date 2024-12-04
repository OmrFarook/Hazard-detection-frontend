    <script>
        export let page;
        export let setPage;




    </script>
    <main class="leftbarMain">
    {#if page === "SensorControl"}
        <div id="analytics" class="ON" >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M6.5 17.5v-3m5 3v-9m5 9v-4m5-8a3 3 0 1 1-6 0a3 3 0 0 1 6 0"/><path d="M21.496 11s.004.34.004 1c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12c0-4.478 0-6.717 1.391-8.109C5.282 2.5 7.521 2.5 12 2.5h1"/></g></svg>
        </div>
        <div id="camera" class="OFF" on:click={setPage("Camera Stream")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2" fill="currentColor"/><path fill="currentColor" d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5"/></svg>
        </div>
    {:else}
    <div id="analytics" class="OFF" on:click={setPage("SensorControl")}>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M6.5 17.5v-3m5 3v-9m5 9v-4m5-8a3 3 0 1 1-6 0a3 3 0 0 1 6 0"/><path d="M21.496 11s.004.34.004 1c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12c0-4.478 0-6.717 1.391-8.109C5.282 2.5 7.521 2.5 12 2.5h1"/></g></svg>
    </div>
    <div id="camera" class="ON" on:click={setPage("Camera Stream")}>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2" fill="currentColor"/><path fill="currentColor" d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5"/></svg>
    </div>
    {/if}
            
    </main>

    <style>
        *{
            transition: 0.25s;
        }
        .OFF{
            background-color: #000;
            border: 1px solid #fff;
            color: #fff;
            width: 3vw; 
            height: 3vw;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .OFF:hover{
            cursor: pointer;
            width: 3.25vw;
            height: 3.25vw;
        }
        .ON{
            background-color: #F7B32D;
            color: #C00000;
            width: 3vw; 
            height: 3vw;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .ON:hover{
            cursor: pointer;
            background-color: #C00000;
            color: #F7B32D;
            width: 3.25vw;
            height: 3.25vw;
            
        }

        
        .leftbarMain {
            background-color: #000;
            margin: 0;
            height: 100vh;
            width: 4vw;
            border-radius: 0 10px 0 0;
            z-index: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2vh;
        }
    </style>
