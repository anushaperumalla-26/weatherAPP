function checkWeather(){
    let city = document.getElementById('inp').value

    document.getElementById('inp').value =''

    fetch(`https://api.weatherapi.com/v1/current.json?key=07ea576fef174d4993b135902252908&q=${city}`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        document.getElementById('location').innerHTML = `${data.location.name}, ${data.location.region}, ${data.location.country}`
        document.getElementById('tempc').innerHTML = `Temperature in C = ${data.current.temp_c}`
        document.getElementById('icon').src = data.current.condition.icon
        document.getElementById('icon').style.width = "140px"
        document.getElementById('wind').innerHTML = `Wind speed = ${data.current.wind_kph}`
    })
    .catch(()=>{alert('Please enter a valid location')})
}