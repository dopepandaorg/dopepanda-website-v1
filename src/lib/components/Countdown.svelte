<script lang="ts">
import { onMount } from "svelte";

    let countdownDays = '00'
    let countdownHours = '00'
    let countdownMinutes = '00'
    let countdownSeconds = '00'

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    const end = new Date('2021-12-26T16:00:00.000Z').getTime()
    
    onMount(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime()
            const difference = end - now

            console.log('difference', difference)
            
            if (difference < 0) {
                clearInterval(interval)
                countdownDays = '00'
                countdownHours = '00'
                countdownMinutes = '00'
                countdownSeconds = '00'
                return
            }

            countdownDays = String(Math.floor(difference / days)).padStart(2, '0')
            countdownHours = String(Math.floor((difference % days) / hours)).padStart(2, '0')
            countdownMinutes = String(Math.floor((difference % hours) / minutes)).padStart(2, '0')
            countdownSeconds = String(Math.floor((difference % minutes) / seconds)).padStart(2, '0')
        }, 1000)
    })

</script>

<div class="countdown">
    <div class="countdown-item">{countdownDays} <span>Days</span></div>
    <div class="countdown-item">{countdownHours} <span>Hours</span></div>
    <div class="countdown-item">{countdownMinutes} <span>Minutes</span></div>
    <div class="countdown-item">{countdownSeconds} <span>Seconds</span></div>
</div>

<style lang="scss">
    .countdown {
        font-size: 1.5rem;
        font-family: 'HK_Grotesk', 'sans-serif';
        letter-spacing: 1px;
        line-height: 1;
        
        color: #fff;
        background-color: #00000073;
        float: left;
        padding: 1rem 2rem;
        border-radius: 10px;

        display: flex;
        justify-content: space-between;
    }

    .countdown-item {
        flex: 1;
        text-align: center;
        padding: 0 0.5rem;
        
        span {
            font-family: 'Roboto', 'sans-serif';
            font-size: 0.625rem;
            font-weight: bold;
            text-transform: uppercase;
            margin-top: 0.75rem;
            display: block;
            opacity: 0.65;
        }
    }
</style>
