function btn_pusk()
{
    var man = document.getElementById("man")
    man.classList.toggle('running')
    document.getElementById("rocket").classList.toggle('running-delay')
    var btn_pusk = document.getElementById("btn-pusk")
    btn_pusk.classList.toggle('display-none')
    setTimeout(celeb(), 3000)
}

function celeb()
{
    var celeb = anime(
        {
            targets: '.body__celeb',
            translateY: 200,
            autoplay: true,
            delay: 3000,
    
        }
    )
}

var btn = 1

function change()
{
    var star_right = document.getElementById("star-right")
    star_right.classList.toggle("paused")
    var star_left = document.getElementById("star-left")
    star_left.classList.toggle("paused")
    if ( btn % 2  == 0 )
    {
        btn++
        document.getElementById("body-btn").innerHTML="Stop"
        document.getElementById("body-btn").style.backgroundColor="rgb(167, 63, 63)"
    }
    else
    {
        btn++
        document.getElementById("body-btn").innerHTML="Start"
        document.getElementById("body-btn").style.backgroundColor="rgb(63, 167, 91)"
    }
    setTimeout(btn_anime(), 1000)
}

function btn_anime()
{
    var btn_anime = anime(
        {
            targets: '#body-btn',
            direction: 'alternate',
            scale: {
                value: 1.1,
                duration: 100,
                delay: 0,
                easing: 'easeInOutQuart',
            }
        })
}
