import{r as o,j as a,c as i}from"./index-r5azVTyr.js";const m=[{id:"hero_inferno",name:"Infernus",imageUrl:"/assets/heroes/hero_inferno.png",_sourceImageUrl:"https://assets.deadlock-api.com/images/heroes/inferno_card_psd.png",experimental:!1},{id:"hero_gigawatt",name:"Seven",imageUrl:"/assets/heroes/hero_gigawatt.png",_sourceImageUrl:"https://assets.deadlock-api.com/images/heroes/gigawatt_card_psd.png",experimental:!1},{id:"hero_hornet",name:"Vindicta",imageUrl:"/assets/heroes/hero_hornet.png",_sourceImageUrl:"https://assets.deadlock-api.com/images/heroes/hornet_card_psd.png",experimental:!1},{id:"hero_ghost",name:"Lady Geist",imageUrl:"/assets/heroes/hero_ghost.png",_sourceImageUrl:"https://assets.deadlock-api.com/images/heroes/spectre_card_psd.png",experimental:!1},{id:"hero_atlas",name:"Abrams",imageUrl:"/assets/heroes/hero_atlas.png",_sourceImageUrl:"https://assets.deadlock-api.com/images/heroes/bull_card_psd.png",experimental:!1},{id:"hero_wraith",name:"Wraith",imageUrl:"/assets/heroes/hero_wraith.png",_sourceImageUrl:"https://assets.deadlock-api.com/images/heroes/wraith_card_psd.png",experimental:!1},{id:"hero_forge",name:"McGinnis",imageUrl:"/assets/heroes/hero_forge.png",_sourceImageUrl:"https://assets.deadlock-api.com/images/heroes/engineer_card_psd.png",experimental:!1},{id:"hero_chrono",name:"Paradox",imageUrl:"/assets/heroes/hero_chrono.png",_sourceImageUrl:"https://assets.deadlock-api.com/images/heroes/chrono_card_psd.png",experimental:!1},{id:"hero_dynamo",name:"Dynamo",imageUrl:"/assets/heroes/hero_dynamo.png",_sourceImageUrl:"https://assets.deadlock-api.com/images/heroes/sumo_card_psd.png",experimental:!1},{id:"hero_kelvin",name:"Kelvin",imageUrl:"/assets/heroes/hero_kelvin.png",_sourceImageUrl:"https://assets.deadlock-api.com/images/heroes/kelvin_card_psd.png",experimental:!1},{id:"hero_haze",name:"Haze",imageUrl:"/assets/heroes/hero_haze.png",_sourceImageUrl:"https://assets.deadlock-api.com/images/heroes/haze_card_psd.png",experimental:!1},{id:"hero_astro",name:"Holliday",imageUrl:"/assets/heroes/hero_astro.png",_sourceImageUrl:"https://assets.deadlock-api.com/images/heroes/astro_card_psd.png",experimental:!0},{id:"hero_bebop",name:"Bebop",imageUrl:"/assets/heroes/hero_bebop.png",_sourceImageUrl:"https://assets.deadlock-api.com/images/heroes/bebop_card_psd.png",experimental:!1},{id:"hero_nano",name:"Calico",imageUrl:"/assets/heroes/hero_nano.png",_sourceImageUrl:"https://assets.deadlock-api.com/images/heroes/nano_card_psd.png",experimental:!0},{id:"hero_orion",name:"Grey Talon",imageUrl:"/assets/heroes/hero_orion.png",_sourceImageUrl:"https://assets.deadlock-api.com/images/heroes/archer_card_psd.png",experimental:!1},{id:"hero_krill",name:"Mo & Krill",imageUrl:"/assets/heroes/hero_krill.png",_sourceImageUrl:"https://assets.deadlock-api.com/images/heroes/digger_card_psd.png",experimental:!1},{id:"hero_shiv",name:"Shiv",imageUrl:"/assets/heroes/hero_shiv.png",_sourceImageUrl:"https://assets.deadlock-api.com/images/heroes/shiv_card_psd.png",experimental:!1},{id:"hero_tengu",name:"Ivy",imageUrl:"/assets/heroes/hero_tengu.png",_sourceImageUrl:"https://assets.deadlock-api.com/images/heroes/tengu_card_psd.png",experimental:!1},{id:"hero_warden",name:"Warden",imageUrl:"/assets/heroes/hero_warden.png",_sourceImageUrl:"https://assets.deadlock-api.com/images/heroes/warden_card_psd.png",experimental:!1},{id:"hero_yamato",name:"Yamato",imageUrl:"/assets/heroes/hero_yamato.png",_sourceImageUrl:"https://assets.deadlock-api.com/images/heroes/yamato_card_psd.png",experimental:!1},{id:"hero_lash",name:"Lash",imageUrl:"/assets/heroes/hero_lash.png",_sourceImageUrl:"https://assets.deadlock-api.com/images/heroes/lash_card_psd.png",experimental:!1},{id:"hero_viscous",name:"Viscous",imageUrl:"/assets/heroes/hero_viscous.png",_sourceImageUrl:"https://assets.deadlock-api.com/images/heroes/viscous_card_psd.png",experimental:!1},{id:"hero_wrecker",name:"Wrecker",imageUrl:"/assets/heroes/hero_wrecker.png",_sourceImageUrl:"https://assets.deadlock-api.com/images/heroes/wrecker_card_psd.png",experimental:!0},{id:"hero_synth",name:"Pocket",imageUrl:"/assets/heroes/hero_synth.png",_sourceImageUrl:"https://assets.deadlock-api.com/images/heroes/synth_card_psd.png",experimental:!1},{id:"hero_mirage",name:"Mirage",imageUrl:"/assets/heroes/hero_mirage.png",_sourceImageUrl:"https://assets.deadlock-api.com/images/heroes/mirage_card_psd.png",experimental:!1},{id:"hero_slork",name:"Fathom",imageUrl:"/assets/heroes/hero_slork.png",_sourceImageUrl:"https://assets.deadlock-api.com/images/heroes/slork_card_psd.png",experimental:!0},{id:"hero_viper",name:"Viper",imageUrl:"/assets/heroes/hero_viper.png",_sourceImageUrl:"https://assets.deadlock-api.com/images/heroes/kali_card_psd.png",experimental:!0},{id:"hero_magician",name:"Magician",imageUrl:"/assets/heroes/hero_magician.png",_sourceImageUrl:"https://assets.deadlock-api.com/images/heroes/magician_card_psd.png",experimental:!0},{id:"hero_trapper",name:"Trapper",imageUrl:"/assets/heroes/hero_trapper.png",_sourceImageUrl:"https://assets.deadlock-api.com/images/heroes/trapper_card_psd.png",experimental:!0}],p="/deadlock-comdraft/",r=m.map(e=>(e.imageUrl=p+e.imageUrl,e)).sort((e,s)=>e.name.localeCompare(s.name)),n=(e=!0)=>e?r:r.filter(s=>!s.experimental),l=(e=!0)=>{const[s,t]=o.useState(r);return o.useEffect(()=>{t(n(e))},[e]),s},h=({})=>{const e=l(!1);return a.jsxs("div",{children:["Heroes",a.jsx("ul",{className:"flex flex-row flex-wrap gap-1    ",children:e.map(s=>a.jsx("li",{children:a.jsx(g,{hero:s})},s.id))})]})},g=({hero:e})=>a.jsxs("div",{className:"border-2 border-darkBg hover:border-red-300",children:[a.jsx("img",{src:e.imageUrl,alt:e.name,className:"block w-[110px] h-[150px]"}),e.name]}),_=i("/")({component:d});function d(){return a.jsx("div",{className:"p-2",children:a.jsx(h,{})})}export{_ as Route};
