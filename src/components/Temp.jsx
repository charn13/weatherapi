import { useEffect, useState } from 'react'
import Select from 'react-select';
const Temp = ()=>{
    const [City, SetCity] = useState('Muktsar')
    const [Temp, SetTemp] = useState(null)
    const [Icon, SetIcon] = useState(null)
    const [allcities, Setallcities] = useState([
        "Abidjan",
"Abu Dhabi",
"Abuja",
"Accra",
"Addis Ababa",
"Ahmedabad",
"Aleppo",
"Alexandria",
"Algiers",
"Almaty",
"Amman",
"Amsterdam",
"Anchorage",
"Andorra la Vella",
"Ankara",
"Antananarivo",
"Apia",
"Arnold",
"Ashgabat",
"Asmara",
"Asuncion",
"Athens",
"Auckland",
"Avarua",
"Baghdad",
"Baku",
"Bamako",
"Banda Aceh",
"Bandar Seri Begawan",
"Bandung",
"Bangkok",
"Bangui",
"Banjul",
"Barcelona",
"Barranquilla",
"Basrah",
"Basse-Terre",
"Basseterre",
"Beijing",
"Beirut",
"Bekasi",
"Belem",
"Belgrade",
"Belmopan",
"Belo Horizonte",
"Bengaluru",
"Berlin",
"Bern",
"Bishkek",
"Bissau",
"Bogota",
"Brasilia",
"Bratislava",
"Brazzaville",
"Bridgetown",
"Brisbane",
"Brussels",
"Bucharest",
"Budapest",
"Buenos Aires",
"Bujumbura",
"Bursa",
"Busan",
"Cairo",
"Cali",
"Caloocan",
"Camayenne",
"Canberra",
"Cape Town",
"Caracas",
"Casablanca",
"Castries",
"Cayenne",
"Charlotte Amalie",
"Chengdu",
"Chennai",
"Chicago",
"Chisinau",
"Chittagong",
"Chongqing",
"Colombo",
"Conakry",
"Copenhagen",
"Cordoba",
"Curitiba",
"Daegu",
"Daejeon",
"Dakar",
"Dallas",
"Damascus",
"Dar es Salaam",
"Delhi",
"Denver",
"Dhaka",
"Dili",
"Djibouti",
"Dodoma",
"Doha",
"Dongguan",
"Douala",
"Douglas",
"Dubai",
"Dublin",
"Durban",
"Dushanbe",
"Faisalabad",
"Fort-de-France",
"Fortaleza",
"Freetown",
"Fukuoka",
"Funafuti",
"Gaborone",
"George Town",
"Georgetown",
"Gibraltar",
"Gitega",
"Giza",
"Guadalajara",
"Guangzhou",
"Guatemala City",
"Guayaquil",
"Gujranwala",
"Gustavia",
"Gwangju",
"Hamburg",
"Hanoi",
"Harare",
"Havana",
"Helsinki",
"Ho Chi Minh City",
"Hong Kong",
"Honiara",
"Honolulu",
"Houston",
"Hyderabad",
"Hyderabad",
"Ibadan",
"Incheon",
"Isfahan",
"Islamabad",
"Istanbul",
"Izmir",
"Jaipur",
"Jakarta",
"Jeddah",
"Jerusalem",
"Johannesburg",
"Juarez",
"Juba",
"Kabul",
"Kaduna",
"Kampala",
"Kano",
"Kanpur",
"Kaohsiung",
"Karachi",
"Karaj",
"Kathmandu",
"Kawasaki",
"Kharkiv",
"Khartoum",
"Khulna",
"Kigali",
"Kingsburg",
"Kingston",
"Kingstown",
"Kinshasa",
"Kobe",
"Kolkata",
"Kota Bharu",
"Kowloon",
"Kuala Lumpur",
"Kumasi",
"Kuwait",
"Kyiv",
"Kyoto",
"La Paz",
"Lagos",
"Lahore",
"Libreville",
"Lilongwe",
"Lima",
"Lisbon",
"Ljubljana",
"Lome",
"London",
"Los Angeles",
"Luanda",
"Lubumbashi",
"Lusaka",
"Luxembourg",
"Macau",
"Madrid",
"Majuro",
"Makassar",
"Malabo",
"Male",
"Mamoudzou",
"Managua",
"Manama",
"Manaus",
"Manila",
"Maputo",
"Maracaibo",
"Maracay",
"Mariehamn",
"Marigot",
"Maseru",
"Mashhad",
"Mbabane",
"Mecca",
"Medan",
"Medellin",
"Medina",
"Melbourne",
"Mexico City",
"Miami",
"Minsk",
"Mogadishu",
"Monaco",
"Monrovia",
"Montevideo",
"Montreal",
"Moroni",
"Moscow",
"Mosul",
"Multan",
"Mumbai",
"Muscat",
"N'Djamena",
"Nagoya",
"Nairobi",
"Nanchong",
"Nanjing",
"Nassau",
"Nay Pyi Taw",
"New York",
"Niamey",
"Nicosia",
"Nouakchott",
"Noumea",
"Novosibirsk",
"Nuku'alofa",
"Nur-Sultan",
"Nuuk",
"Oranjestad",
"Osaka",
"Oslo",
"Ottawa",
"Ouagadougou",
"Pago Pago",
"Palembang",
"Palo Alto",
"Panama",
"Papeete",
"Paramaribo",
"Paris",
"Perth",
"Philadelphia",
"Phnom Penh",
"Phoenix",
"Podgorica",
"Port Louis",
"Port Moresby",
"Port of Spain",
"Port-Vila",
"Port-au-Prince",
"Porto Alegre",
"Porto-Novo",
"Prague",
"Praia",
"Pretoria",
"Pristina",
"Puebla",
"Pune",
"Pyongyang",
"Quezon City",
"Quito",
"Rabat",
"Rawalpindi",
"Recife",
"Reykjavik",
"Riga",
"Rio de Janeiro",
"Riyadh",
"Road Town",
"Rome",
"Roseau",
"Saint George's",
"Saint Helier",
"Saint John's",
"Saint Peter Port",
"Saint Petersburg",
"Saint-Denis",
"Saint-Pierre",
"Saipan",
"Salvador",
"San Antonio",
"San Diego",
"San Francisco",
"San Jose",
"San Juan",
"San Marino",
"San Salvador",
"Sanaa",
"Santa Cruz de la Sierra",
"Santiago",
"Santo Domingo",
"Sao Paulo",
"Sao Tome",
"Sapporo",
"Sarajevo",
"Seattle",
"Semarang",
"Seoul",
"Shanghai",
"Sharjah",
"Shenzhen",
"Singapore",
"Skopje",
"Sofia",
"South Tangerang",
"Soweto",
"Stockholm",
"Sucre",
"Surabaya",
"Surat",
"Suva",
"Sydney",
"Tabriz",
"Taipei",
"Tallinn",
"Tangerang",
"Tarawa",
"Tashkent",
"Tbilisi",
"Tegucigalpa",
"Tehran",
"Tel Aviv",
"Thimphu",
"Tianjin",
"Tijuana",
"Tirana",
"Tokyo",
"Toronto",
"Torshavn",
"Tripoli",
"Tunis",
"Ulan Bator",
"Vaduz",
"Valencia",
"Valletta",
"Vancouver",
"Victoria",
"Vienna",
"Vientiane",
"Vilnius",
"Warsaw",
"Washington",
"Wellington",
"Willemstad",
"Windhoek",
"Wuhan",
"Xi'an",
"Yamoussoukro",
"Yangon",
"Yaounde",
"Yekaterinburg",
"Yerevan",
"Yokohama",
"Zagreb",
    ])

    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City},&units=metric&wind.speed.unit=imper&appid=dbdc1cf4134f3ac6426d8884d7f388ab`)
        .then((response)=>{
            return response.json()
        }).then((response)=>{
                
            if(response){

                console.log(response)
                SetTemp(response.main)
                SetIcon(response.weather)
            }
        
           
        })
    },[City])
    
    useEffect(() => {
        // Play background audio when component mounts
        const audio = new Audio('../mp3/thunder-12.mp3'); // Replace 'your-audio-file.mp3' with the actual file path
        audio.play();

        // Cleanup function to stop audio when component unmounts
        return () => {
            audio.pause();
            audio.currentTime =0;
        };
    }, [City]);

    const InputData =(event)=>{
        SetCity(event.target.value)
       
   }

   const handleChange = (selectedOption) => {
    SetCity(selectedOption.value);
};

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#f0f0f0' : 'white', // Change the background color when focused
        color: state.isSelected ? 'white' : 'black', // Change the text color when selected
        
    }),
};

const audio =("../mp3/thunder-12.mp3")


    return(

       

            <div className="container" >
            <div className="row main-cont tempc" >
            {console.log(allcities, "allcities")}
                <div className="col-md-12">
                <label htmlFor="exampleDataList" className="form-label">Search City</label>
                <Select
                
                        value={{ label: City, value: City }}
                        onChange={handleChange}
                        options={allcities.map((city) => ({ label: city, value: city,  }))}
                        styles={customStyles} // Apply the custom styles
                    />
                </div>
                <div className="row">
                    <div className="col-md-12">
              
                    
                     <datalist id="datalistOptions">
{console.log(allcities, "====")}
                        {allcities.map((city, index)=> (
                          
                          <option key={index} value={city}>
                          {city}
                      </option>

                        ))}


                        
                        
                     </datalist>
                 
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        { !Temp ? ( 
                    <p>No data found</p>
                   
                ) :( 
                    <div className='clearfix'>
                <div>
                    <h2 className='text-center py-3'><i className="fa-solid fa-location-dot"></i> {City} {Math.round(Temp.temp)} <span><sup>o</sup>C</span>
                    </h2>
                    <div className=''>
                    <img src={`http://openweathermap.org/img/wn/${Icon[0].icon}@2x.png`} alt='icon' className='d-block mx-auto'/>
                    <p className='text-center ps-3' style={{marginTop:'-15px'}}>{Icon[0].main}</p>
                    </div>
                    <div className='text-center '>
                    <p>Min Temp: {Temp.temp_min}<sup>o</sup>C | Max Temp: {Temp.temp_max}<sup>o</sup>C</p>
                </div>
                   
                   
               
                
                </div>
                </div>
                
                
               
                )
                }
                        </div>
                    </div>
                </div>
            </div>


</div>
  )
}


export default Temp;
