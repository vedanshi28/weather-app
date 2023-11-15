const submitBtn=document.getElementById('submitBtn');
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const temp_status=document.getElementById('temp_status');
const temp_val=document.getElementById('temp_val');
const  data_hide=document.querySelector('.middle_layer');

const getInfo= async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal===""){
       city_name.innerText='Please enter city name';
       data_hide.classList.add('data_hide');
    }
    else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=6857920d5978219749f5489ee8991546`
            const response = await fetch(url);
            const data=await response.json();
            const arrData=[data];
            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
            temp_val.innerText=arrData[0].main.temp;
            console.log(data);
            const tempMood=arrData[0].weather[0].main;
            if(tempMood=="Clear"){
                temp_status.innerHTML="<i class='fa-solid fa-sun' style='color:#eccc68';></i>"
            }
            else if(tempMood=="Clouds"){
                temp_status.innerHTML="<i class='fa-solid fa-cloud' style='color:#f1f2f6';></i>"
            }
            else if(tempMood=="Rain"){
                temp_status.innerHTML="<i class='fa-solid fa-cloud-rain' style='color:#a4b0be';></i>"
            }
            else{
                temp_status.innerHTML="<i class='fa-solid fa-sun' style='color:#eccc68;'></i>"
            }
            data_hide.classList.remove('data_hide');
        }
        catch{
            city_name.innerText='Please enter city name';
            data_hide.classList.add('data_hide');
        }
    }
}
submitBtn.addEventListener('click',getInfo);