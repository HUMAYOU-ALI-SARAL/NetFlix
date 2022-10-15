const browse = document.querySelector("#browse");
const responsive_nav_list = document.querySelector("#responsive_nav_list");
let open = false;
browse.addEventListener("click", (e) => {
  e.preventDefault();
  if (open == false) {
    responsive_nav_list.style.display = "flex";
    open = true;
  } else {
    responsive_nav_list.style.display = "none";
    open = false;
  }
});
// sliders code starts from here!
const sliders = [
  {
    id: "slider1",
    class: "slider",
    heading: "my list",
    nav_left: `<i class="fa-solid fa-caret-left"></i>`,
    nav_right: `<i class="fa-solid fa-caret-right"></i>`,
    sliderImages: [
      {
        image: `../Assets/mainpage/nineteen.jpeg`,id:'1'
    
      },
      { image: '../Assets/mainpage/one.jpeg',id:'2'},
      { image: `../Assets/mainpage/twenty.jpeg`,id:'3'},
      {
        image: `../Assets/mainpage/twenty1.jpeg`,id:'4'
    
      },
      { image: `../Assets/mainpage/five.jpeg`,id:'5'},
      { image: `../Assets/mainpage/six.jpeg`,id:'6'},
      {
        image: `../Assets/mainpage/fourteen.jpeg`,id:'7'
    
      },
      { image: `../Assets/mainpage/eight.jpeg`,id:'8'},
      { image: `../Assets/mainpage/nine.jpeg`,id:'9'},
      { image: `../Assets/mainpage/ten.jpeg`,id:'10'},
      { image: `../Assets/mainpage/eleven.jpeg`,id:"11"},
      {
        image: `../Assets/mainpage/thirteen.jpeg`,id:'12',
    
      },
    ],
  },
  {
    id: "slider1",
    class: "slider",
    heading: "continue watching for siskam",
    nav_left: `<i class="fa-solid fa-caret-left"></i>`,
    nav_right: `<i class="fa-solid fa-caret-right"></i>`,
    sliderImages: [
      { image: `../Assets/mainpage/two.jpeg`,id:'2'},
      {
        image: '../Assets/mainpage/twenty7.jpeg',id:'1',
    
      },
      { image: `../Assets/mainpage/three.jpeg`,id:'3'},
      { image: `../Assets/mainpage/four.jpeg`,id:'5'},
      {
        image: `../Assets/mainpage/twenty6.jpeg`,id:'4'
    
      },
      {
        image: `../Assets/mainpage/twenty9.jpeg`,id:'5'
    
      },
      {
        image: `../Assets/mainpage/twenty7.jpeg`,id:'1',
    
      },
      {
        image: `../Assets/mainpage/tweleve.jpeg`,id:'3',
    
      },
      { image: `../Assets/mainpage/ten.jpeg`,id:'5'},
      {
        image: `../Assets/mainpage/thirteen.jpeg`,id:'2',
    
      },
      {
        image: `../Assets/mainpage/twenty6.jpeg`,id:'4'
    
      },
      {
        image: `../Assets/mainpage/twenty9.jpeg`,id:'5'
    
      },
    ],
  },
  {
    id: "slider1",
    class: "slider",
    heading: "trending now",
    nav_left: `<i class="fa-solid fa-caret-left"></i>`,
    nav_right: `<i class="fa-solid fa-caret-right"></i>`,
    sliderImages: [
      { image: `../Assets/mainpage/eleven.jpeg`,id:"1"},
      {
        image: `../Assets/mainpage/twenty9.jpeg`,id:'5'
    
      },
      { image: `../Assets/mainpage/ten.jpeg`,id:'5'},
      { image: `../Assets/mainpage/twenty.jpeg`,id:'4'},
      {
        image: `../Assets/mainpage/twenty1.jpeg`,id:'3'
    
      },
      { image: `../Assets/mainpage/ten.jpeg`,id:'5'},
      {
        image: `../Assets/mainpage/twenty6.jpeg`,id:'4'
    
      },
      {
        image: `../Assets/mainpage/thirteen.jpeg`,id:'2',
    
      },
      {
        image: `../Assets/mainpage/tweleve.jpeg`,id:'3',
    
      },
      {
        image: '../Assets/mainpage/twenty7.jpeg',id:'1',
    
      },
      {
        image: `../Assets/mainpage/twenty9.jpeg`,id:'5'
    
      },
      {
        image: `../Assets/mainpage/thirteen.jpeg`,id:'2',
    
      },
    ],
  },
  {
    id: "slider1",
    class: "slider",
    heading: "new realease",
    nav_left: `<i class="fa-solid fa-caret-left"></i>`,
    nav_right: `<i class="fa-solid fa-caret-right"></i>`,
    sliderImages: [
      {
        image: `../Assets/mainpage/fifteen.jpeg`,id:'3',
    
      },
      {
        image: '../Assets/mainpage/fourteen.jpeg',id:'1'
    
      },
      {
        image: `../Assets/mainpage/seventeen.jpeg`,id:'4',
    
      },
      {
        image: `../Assets/mainpage/sixteen.jpeg`,id:'2',
    
      },
      {
        image: `../Assets/mainpage/eighteen.jpeg`,id:'3',
    
      },
      {
        image: `../Assets/mainpage/nineteen.jpeg`,id:'1'
    
      },
      { image: `../Assets/mainpage/twenty.jpeg`,id:'4'},
      {
        image: `../Assets/mainpage/twenty1.jpeg`,id:'3'
    
      },
      { image: `../Assets/mainpage/ten.jpeg`,id:'5'},
      {
        image: `../Assets/mainpage/thirteen.jpeg`,id:'2',
    
      },
      {
        image: `../Assets/mainpage/twenty6.jpeg`,id:'4'
    
      },
      {
        image: `../Assets/mainpage/twenty9.jpeg`,id:'5'
    
      },
    ],
  },
  {
    id: "slider1",
    class: "slider",
    heading: "military",
    nav_left: `<i class="fa-solid fa-caret-left"></i>`,
    nav_right: `<i class="fa-solid fa-caret-right"></i>`,
    sliderImages: [
      {
        image: `../Assets/mainpage/twenty3.jpeg`,id:'1',
    
      },
      {
        image: `../Assets/mainpage/twenty4.jpeg`,id:'4',
    
      },
      {
        image: '../Assets/mainpage/twenty1.jpeg',id:'3'
    
      },
      {
        image: `../Assets/mainpage/twenty5.jpeg`,id:'5',
    
      },
      {
        image: `../Assets/mainpage/twenty6.jpeg`,id:'4'
    
      },
      {
        image: `../Assets/mainpage/twenty7.jpeg`,id:'1',
    
      },
      {
        image: `../Assets/mainpage/twenty8.jpeg`,id:'2',
    
      },
      {
        image: `../Assets/mainpage/tweleve.jpeg`,id:'3',
    
      },
      { image: `../Assets/mainpage/ten.jpeg`,id:'5'},
      {
        image: `../Assets/mainpage/thirteen.jpeg`,id:'2',
    
      },
      {
        image: `../Assets/mainpage/twenty6.jpeg`,id:'4'
    
      },
      {
        image: `../Assets/mainpage/twenty9.jpeg`,id:'5'
    
      },
    ],
  },
  {
    id: "slider1",
    class: "slider",
    heading: "tv comedies",
    nav_left: `<i class="fa-solid fa-caret-left"></i>`,
    nav_right: `<i class="fa-solid fa-caret-right"></i>`,
    sliderImages: [
      {
        image: `../Assets/mainpage/nineteen.jpeg`,id:'1'
    
      },
      { image: '../Assets/mainpage/one.jpeg',id:'2'},
      { image: `../Assets/mainpage/six.jpeg`,id:'2'},
      {
        image: `../Assets/mainpage/fourteen.jpeg`,id:'1'
    
      },
      { image: `../Assets/mainpage/eight.jpeg`,id:'3'},
      { image: `../Assets/mainpage/nine.jpeg`,id:'4'},
      { image: `../Assets/mainpage/ten.jpeg`,id:'5'},
      { image: `../Assets/mainpage/eleven.jpeg`,id:"1"},
      {
        image: `../Assets/mainpage/thirteen.jpeg`,id:'2',
    
      },
      { image: `../Assets/mainpage/twenty.jpeg`,id:'4'},
      {
        image: `../Assets/mainpage/twenty1.jpeg`,id:'3'
    
      },
      { image: `../Assets/mainpage/five.jpeg`,id:'5'},
    ],
  },
  {
    id: "slider1",
    class: "top-movies-slider",
    heading: "top 10 movies tv shows in pakistan",
    nav_left: `<i class="fa-solid fa-caret-left"></i>`,
    nav_right: `<i class="fa-solid fa-caret-right"></i>`,
    sliderImages: [
      {
        image:
          '../Assets/mainpage/twenty2.jpeg',id:'2',
    
      },
      {
        image:
          '../Assets/mainpage/seven.jpeg',id:'1',
    
      },
      {
        image:
          '../Assets/mainpage/seven.jpeg',id:'1',
    
      },
      {
        image:
          '../Assets/mainpage/twenty2.jpeg',id:'2',
    
      },
      {
        image:
          '../Assets/mainpage/seven.jpeg',id:'1',
    
      },
      {
        image:
          '../Assets/mainpage/twenty2.jpeg',id:'2',
    
      },
      {
        image:
          '../Assets/mainpage/seven.jpeg',id:'1',
    
      },
      {
        image:
          '../Assets/mainpage/twenty2.jpeg',id:'2',
    
      },
      {
        image:
          '../Assets/mainpage/seven.jpeg',id:'1',
    
      },
      {
        image:
          '../Assets/mainpage/twenty2.jpeg',id:'2',
    
      },
    ],
  },
  {
    id: "slider1",
    class: "slider",
    heading: "only on netflix",
    nav_left: `<i class="fa-solid fa-caret-left"></i>`,
    nav_right: `<i class="fa-solid fa-caret-right"></i>`,
    sliderImages: [
      {
        image: `../Assets/mainpage/nineteen.jpeg`,id:'1'
    
      },
      { image: '../Assets/mainpage/one.jpeg',id:'2'},
      { image: `../Assets/mainpage/twenty.jpeg`,id:'4'},
      {
        image: `../Assets/mainpage/twenty1.jpeg`,id:'3'
    
      },
      { image: `../Assets/mainpage/five.jpeg`,id:'5'},
      { image: `../Assets/mainpage/six.jpeg`,id:'2'},
      {
        image: `../Assets/mainpage/fourteen.jpeg`,id:'1'
    
      },
      { image: `../Assets/mainpage/eight.jpeg`,id:'3'},
      { image: `../Assets/mainpage/nine.jpeg`,id:'4'},
      { image: `../Assets/mainpage/ten.jpeg`,id:'5'},
      { image: `../Assets/mainpage/eleven.jpeg`,id:"1"},
      {
        image: `../Assets/mainpage/thirteen.jpeg`,id:'2',
    
      },
    ],
  },
  {
    id: "slider1",
    class: "slider",
    heading: "strong black lead",
    nav_left: `<i class="fa-solid fa-caret-left"></i>`,
    nav_right: `<i class="fa-solid fa-caret-right"></i>`,
    sliderImages: [
      { image: `../Assets/mainpage/two.jpeg`,id:'2'},
      {
        image: '../Assets/mainpage/twenty7.jpeg',id:'1',
    
      },
      { image: `../Assets/mainpage/three.jpeg`,id:'3'},
      { image: `../Assets/mainpage/four.jpeg`,id:'5'},
      {
        image: `../Assets/mainpage/twenty6.jpeg`,id:'4'
    
      },
      {
        image: `../Assets/mainpage/twenty9.jpeg`,id:'5'
    
      },
      {
        image: `../Assets/mainpage/twenty7.jpeg`,id:'1',
    
      },
      {
        image: `../Assets/mainpage/tweleve.jpeg`,id:'3',
    
      },
      { image: `../Assets/mainpage/ten.jpeg`,id:'5'},
      {
        image: `../Assets/mainpage/thirteen.jpeg`,id:'2',
    
      },
      {
        image: `../Assets/mainpage/twenty6.jpeg`,id:'4'
    
      },
      {
        image: `../Assets/mainpage/twenty9.jpeg`,id:'5'
    
      },
    ],
  },
  {
    id: "slider1",
    class: "slider",
    heading: "watch it again",
    nav_left: `<i class="fa-solid fa-caret-left"></i>`,
    nav_right: `<i class="fa-solid fa-caret-right"></i>`,
    sliderImages: [
      { image: `../Assets/mainpage/eleven.jpeg`,id:"1"},
      {
        image: `../Assets/mainpage/twenty9.jpeg`,id:'5'
    
      },
      { image: `../Assets/mainpage/ten.jpeg`,id:'5'},
      { image: `../Assets/mainpage/twenty.jpeg`,id:'4'},
      {
        image: `../Assets/mainpage/twenty1.jpeg`,id:'3'
    
      },
      { image: `../Assets/mainpage/ten.jpeg`,id:'5'},
      {
        image: `../Assets/mainpage/twenty6.jpeg`,id:'4'
    
      },
      {
        image: `../Assets/mainpage/thirteen.jpeg`,id:'2',
    
      },
      {
        image: `../Assets/mainpage/tweleve.jpeg`,id:'3',
    
      },
      {
        image: '../Assets/mainpage/twenty7.jpeg',id:'1',
    
      },
      {
        image: `../Assets/mainpage/twenty9.jpeg`,id:'5'
    
      },
      {
        image: `../Assets/mainpage/thirteen.jpeg`,id:'2',
    
      },
    ],
  },
  {
    id: "slider1",
    class: "slider",
    heading: "comedies about friendship",
    nav_left: `<i class="fa-solid fa-caret-left"></i>`,
    nav_right: `<i class="fa-solid fa-caret-right"></i>`,
    sliderImages: [
      {
        image: `../Assets/mainpage/fifteen.jpeg`,id:'3',
    
      },
      {
        image: '../Assets/mainpage/fourteen.jpeg',id:'1'
    
      },
      {
        image: `../Assets/mainpage/seventeen.jpeg`,id:'4',
    
      },
      {
        image: `../Assets/mainpage/sixteen.jpeg`,id:'2',
    
      },
      {
        image: `../Assets/mainpage/eighteen.jpeg`,id:'3',
    
      },
      {
        image: `../Assets/mainpage/nineteen.jpeg`,id:'1'
    
      },
      { image: `../Assets/mainpage/twenty.jpeg`,id:'4'},
      {
        image: `../Assets/mainpage/twenty1.jpeg`,id:'3'
    
      },
      { image: `../Assets/mainpage/ten.jpeg`,id:'5'},
      {
        image: `../Assets/mainpage/thirteen.jpeg`,id:'2',
    
      },
      {
        image: `../Assets/mainpage/twenty6.jpeg`,id:'4'
    
      },
      {
        image: `../Assets/mainpage/twenty9.jpeg`,id:'5'
    
      },
    ],
  },
  {
    id: "slider1",
    class: "slider",
    heading: "hollywood movies",
    nav_left: `<i class="fa-solid fa-caret-left"></i>`,
    nav_right: `<i class="fa-solid fa-caret-right"></i>`,
    sliderImages: [
      {
        image: `../Assets/mainpage/twenty3.jpeg`,id:'1',
    
      },
      {
        image: `../Assets/mainpage/twenty4.jpeg`,id:'4',
    
      },
      {
        image: '../Assets/mainpage/twenty1.jpeg',id:'3'
    
      },
      {
        image: `../Assets/mainpage/twenty5.jpeg`,id:'5',
    
      },
      {
        image: `../Assets/mainpage/twenty6.jpeg`,id:'4'
    
      },
      {
        image: `../Assets/mainpage/twenty7.jpeg`,id:'1',
    
      },
      {
        image: `../Assets/mainpage/twenty8.jpeg`,id:'2',
    
      },
      {
        image: `../Assets/mainpage/tweleve.jpeg`,id:'3',
    
      },
      { image: `../Assets/mainpage/ten.jpeg`,id:'5'},
      {
        image: `../Assets/mainpage/thirteen.jpeg`,id:'2',
    
      },
      {
        image: `../Assets/mainpage/twenty6.jpeg`,id:'4'
    
      },
      {
        image: `../Assets/mainpage/twenty9.jpeg`,id:'5'
    
      },
    ],
  },
  {
    id: "slider1",
    class: "slider",
    heading: "documentaries",
    nav_left: `<i class="fa-solid fa-caret-left"></i>`,
    nav_right: `<i class="fa-solid fa-caret-right"></i>`,
    sliderImages: [
      {
        image: `../Assets/mainpage/nineteen.jpeg`,id:'1'
    
      },
      { image: '../Assets/mainpage/one.jpeg',id:'2'},
      { image: `../Assets/mainpage/six.jpeg`,id:'2'},
      {
        image: `../Assets/mainpage/fourteen.jpeg`,id:'1'
    
      },
      { image: `../Assets/mainpage/eight.jpeg`,id:'3'},
      { image: `../Assets/mainpage/nine.jpeg`,id:'4'},
      { image: `../Assets/mainpage/ten.jpeg`,id:'5'},
      { image: `../Assets/mainpage/eleven.jpeg`,id:"1"},
      {
        image: `../Assets/mainpage/thirteen.jpeg`,id:'2',
    
      },
      { image: `../Assets/mainpage/twenty.jpeg`,id:'4'},
      {
        image: `../Assets/mainpage/twenty1.jpeg`,id:'3'
    
      },
      { image: `../Assets/mainpage/five.jpeg`,id:'5'},
    ],
  },
  {
    id: "slider1",
    class: "slider",
    heading: "my list",
    nav_left: `<i class="fa-solid fa-caret-left"></i>`,
    nav_right: `<i class="fa-solid fa-caret-right"></i>`,
    sliderImages: [
      {
        image: `../Assets/mainpage/nineteen.jpeg`,id:'1'
    
      },
      { image: '../Assets/mainpage/one.jpeg',id:'2'},
      { image: `../Assets/mainpage/twenty.jpeg`,id:'4'},
      {
        image: `../Assets/mainpage/twenty1.jpeg`,id:'3'
    
      },
      { image: `../Assets/mainpage/five.jpeg`,id:'5'},
      { image: `../Assets/mainpage/six.jpeg`,id:'2'},
      {
        image: `../Assets/mainpage/fourteen.jpeg`,id:'1'
    
      },
      { image: `../Assets/mainpage/eight.jpeg`,id:'3'},
      { image: `../Assets/mainpage/nine.jpeg`,id:'4'},
      { image: `../Assets/mainpage/ten.jpeg`,id:'5'},
      { image: `../Assets/mainpage/eleven.jpeg`,id:"1"},
      {
        image: `../Assets/mainpage/thirteen.jpeg`,id:'2',
    
      },
    ],
  },
  {
    id: "slider1",
    class: "slider",
    heading: "continue watching for siskam",
    nav_left: `<i class="fa-solid fa-caret-left"></i>`,
    nav_right: `<i class="fa-solid fa-caret-right"></i>`,
    sliderImages: [
      { image: `../Assets/mainpage/two.jpeg`,id:'2'},
      {
        image: '../Assets/mainpage/twenty7.jpeg',id:'1',
    
      },
      { image: `../Assets/mainpage/three.jpeg`,id:'3'},
      { image: `../Assets/mainpage/four.jpeg`,id:'5'},
      {
        image: `../Assets/mainpage/twenty6.jpeg`,id:'4'
    
      },
      {
        image: `../Assets/mainpage/twenty9.jpeg`,id:'5'
    
      },
      {
        image: `../Assets/mainpage/twenty7.jpeg`,id:'1',
    
      },
      {
        image: `../Assets/mainpage/tweleve.jpeg`,id:'3',
    
      },
      { image: `../Assets/mainpage/ten.jpeg`,id:'5'},
      {
        image: `../Assets/mainpage/thirteen.jpeg`,id:'2',
    
      },
      {
        image: `../Assets/mainpage/twenty6.jpeg`,id:'4'
    
      },
      {
        image: `../Assets/mainpage/twenty9.jpeg`,id:'5'
    
      },
    ],
  },
  {
    id: "slider1",
    class: "slider",
    heading: "trending now",
    nav_left: `<i class="fa-solid fa-caret-left"></i>`,
    nav_right: `<i class="fa-solid fa-caret-right"></i>`,
    sliderImages: [
      { image: `../Assets/mainpage/eleven.jpeg`,id:"1"},
      {
        image: `../Assets/mainpage/twenty9.jpeg`,id:'5'
    
      },
      { image: `../Assets/mainpage/ten.jpeg`,id:'5'},
      { image: `../Assets/mainpage/twenty.jpeg`,id:'4'},
      {
        image: `../Assets/mainpage/twenty1.jpeg`,id:'3'
    
      },
      { image: `../Assets/mainpage/ten.jpeg`,id:'5'},
      {
        image: `../Assets/mainpage/twenty6.jpeg`,id:'4'
    
      },
      {
        image: `../Assets/mainpage/thirteen.jpeg`,id:'2',
    
      },
      {
        image: `../Assets/mainpage/tweleve.jpeg`,id:'3',
    
      },
      {
        image: '../Assets/mainpage/twenty7.jpeg',id:'1',
    
      },
      {
        image: `../Assets/mainpage/twenty9.jpeg`,id:'5'
    
      },
      {
        image: `../Assets/mainpage/thirteen.jpeg`,id:'2',
    
      },
    ],
  },
  {
    id: "slider1",
    class: "slider",
    heading: "new realease",
    nav_left: `<i class="fa-solid fa-caret-left"></i>`,
    nav_right: `<i class="fa-solid fa-caret-right"></i>`,
    sliderImages: [
      {
        image: `../Assets/mainpage/fifteen.jpeg`,id:'3',
    
      },
      {
        image: '../Assets/mainpage/fourteen.jpeg',id:'1'
    
      },
      {
        image: `../Assets/mainpage/seventeen.jpeg`,id:'4',
    
      },
      {
        image: `../Assets/mainpage/sixteen.jpeg`,id:'2',
    
      },
      {
        image: `../Assets/mainpage/eighteen.jpeg`,id:'3',
    
      },
      {
        image: `../Assets/mainpage/nineteen.jpeg`,id:'1'
    
      },
      { image: `../Assets/mainpage/twenty.jpeg`,id:'4'},
      {
        image: `../Assets/mainpage/twenty1.jpeg`,id:'3'
    
      },
      { image: `../Assets/mainpage/ten.jpeg`,id:'5'},
      {
        image: `../Assets/mainpage/thirteen.jpeg`,id:'2',
    
      },
      {
        image: `../Assets/mainpage/twenty6.jpeg`,id:'4'
    
      },
      {
        image: `../Assets/mainpage/twenty9.jpeg`,id:'5'
    
      },
    ],
  },
  {
    id: "slider1",
    class: "slider",
    heading: "military",
    nav_left: `<i class="fa-solid fa-caret-left"></i>`,
    nav_right: `<i class="fa-solid fa-caret-right"></i>`,
    sliderImages: [
      {
        image: `../Assets/mainpage/twenty3.jpeg`,id:'1',
    
      },
      {
        image: `../Assets/mainpage/twenty4.jpeg`,id:'4',
    
      },
      {
        image: '../Assets/mainpage/twenty1.jpeg',id:'3'
    
      },
      {
        image: `../Assets/mainpage/twenty5.jpeg`,id:'5',
    
      },
      {
        image: `../Assets/mainpage/twenty6.jpeg`,id:'4'
    
      },
      {
        image: `../Assets/mainpage/twenty7.jpeg`,id:'1',
    
      },
      {
        image: `../Assets/mainpage/twenty8.jpeg`,id:'2',
    
      },
      {
        image: `../Assets/mainpage/tweleve.jpeg`,id:'3',
    
      },
      { image: `../Assets/mainpage/ten.jpeg`,id:'5'},
      {
        image: `../Assets/mainpage/thirteen.jpeg`,id:'2',
    
      },
      {
        image: `../Assets/mainpage/twenty6.jpeg`,id:'4'
    
      },
      {
        image: `../Assets/mainpage/twenty9.jpeg`,id:'5'
    
      },
    ],
  },
  {
    id: "slider1",
    class: "slider",
    heading: "tv comedies",
    nav_left: `<i class="fa-solid fa-caret-left"></i>`,
    nav_right: `<i class="fa-solid fa-caret-right"></i>`,
    sliderImages: [
      {
        image: `../Assets/mainpage/nineteen.jpeg`,id:'1'
    
      },
      { image: '../Assets/mainpage/one.jpeg',id:'2'},
      { image: `../Assets/mainpage/six.jpeg`,id:'2'},
      {
        image: `../Assets/mainpage/fourteen.jpeg`,id:'1'
    
      },
      { image: `../Assets/mainpage/eight.jpeg`,id:'3'},
      { image: `../Assets/mainpage/nine.jpeg`,id:'4'},
      { image: `../Assets/mainpage/ten.jpeg`,id:'5'},
      { image: `../Assets/mainpage/eleven.jpeg`,id:"1"},
      {
        image: `../Assets/mainpage/thirteen.jpeg`,id:'2',
    
      },
      { image: `../Assets/mainpage/twenty.jpeg`,id:'4'},
      {
        image: `../Assets/mainpage/twenty1.jpeg`,id:'3'
    
      },
      { image: `../Assets/mainpage/five.jpeg`,id:'5'},
    ],
  },
  {
    id: "slider1",
    class: "top-movies-slider",
    heading: "top 10 movies tv shows in pakistan",
    nav_left: `<i class="fa-solid fa-caret-left"></i>`,
    nav_right: `<i class="fa-solid fa-caret-right"></i>`,
    sliderImages: [
      {
        image:
          '../Assets/mainpage/twenty2.jpeg',id:'2',
    
      },
      {
        image:
          '../Assets/mainpage/seven.jpeg',id:'1',
    
      },
      {
        image:
          '../Assets/mainpage/seven.jpeg',id:'1',
    
      },
      {
        image:
          '../Assets/mainpage/twenty2.jpeg',id:'2',
    
      },
      {
        image:
          '../Assets/mainpage/seven.jpeg',id:'1',
    
      },
      {
        image:
          '../Assets/mainpage/twenty2.jpeg',id:'2',
    
      },
      {
        image:
          '../Assets/mainpage/seven.jpeg',id:'1',
    
      },
      {
        image:
          '../Assets/mainpage/twenty2.jpeg',id:'2',
    
      },
      {
        image:
          '../Assets/mainpage/seven.jpeg',id:'1',
    
      },
      {
        image:
          '../Assets/mainpage/twenty2.jpeg',id:'2',
    
      },
    ],
  },
  {
    id: "slider1",
    class: "slider",
    heading: "only on netflix",
    nav_left: `<i class="fa-solid fa-caret-left"></i>`,
    nav_right: `<i class="fa-solid fa-caret-right"></i>`,
    sliderImages: [
      {
        image: `../Assets/mainpage/nineteen.jpeg`,id:'1'
    
      },
      { image: '../Assets/mainpage/one.jpeg',id:'2'},
      { image: `../Assets/mainpage/twenty.jpeg`,id:'4'},
      {
        image: `../Assets/mainpage/twenty1.jpeg`,id:'3'
    
      },
      { image: `../Assets/mainpage/five.jpeg`,id:'5'},
      { image: `../Assets/mainpage/six.jpeg`,id:'2'},
      {
        image: `../Assets/mainpage/fourteen.jpeg`,id:'1'
    
      },
      { image: `../Assets/mainpage/eight.jpeg`,id:'3'},
      { image: `../Assets/mainpage/nine.jpeg`,id:'4'},
      { image: `../Assets/mainpage/ten.jpeg`,id:'5'},
      { image: `../Assets/mainpage/eleven.jpeg`,id:"1"},
      {
        image: `../Assets/mainpage/thirteen.jpeg`,id:'2',
    
      },
    ],
  },
  {
    id: "slider1",
    class: "slider",
    heading: "strong black lead",
    nav_left: `<i class="fa-solid fa-caret-left"></i>`,
    nav_right: `<i class="fa-solid fa-caret-right"></i>`,
    sliderImages: [
      { image: `../Assets/mainpage/two.jpeg`,id:'2'},
      {
        image: '../Assets/mainpage/twenty7.jpeg',id:'1',
    
      },
      { image: `../Assets/mainpage/three.jpeg`,id:'3'},
      { image: `../Assets/mainpage/four.jpeg`,id:'5'},
      {
        image: `../Assets/mainpage/twenty6.jpeg`,id:'4'
    
      },
      {
        image: `../Assets/mainpage/twenty9.jpeg`,id:'5'
    
      },
      {
        image: `../Assets/mainpage/twenty7.jpeg`,id:'1',
    
      },
      {
        image: `../Assets/mainpage/tweleve.jpeg`,id:'3',
    
      },
      { image: `../Assets/mainpage/ten.jpeg`,id:'5'},
      {
        image: `../Assets/mainpage/thirteen.jpeg`,id:'2',
    
      },
      {
        image: `../Assets/mainpage/twenty6.jpeg`,id:'4'
    
      },
      {
        image: `../Assets/mainpage/twenty9.jpeg`,id:'5'
    
      },
    ],
  },
  {
    id: "slider1",
    class: "slider",
    heading: "watch it again",
    nav_left: `<i class="fa-solid fa-caret-left"></i>`,
    nav_right: `<i class="fa-solid fa-caret-right"></i>`,
    sliderImages: [
      { image: `../Assets/mainpage/eleven.jpeg`,id:"1"},
      {
        image: `../Assets/mainpage/twenty9.jpeg`,id:'5'
    
      },
      { image: `../Assets/mainpage/ten.jpeg`,id:'5'},
      { image: `../Assets/mainpage/twenty.jpeg`,id:'4'},
      {
        image: `../Assets/mainpage/twenty1.jpeg`,id:'3'
    
      },
      { image: `../Assets/mainpage/ten.jpeg`,id:'5'},
      {
        image: `../Assets/mainpage/twenty6.jpeg`,id:'4'
    
      },
      {
        image: `../Assets/mainpage/thirteen.jpeg`,id:'2',
    
      },
      {
        image: `../Assets/mainpage/tweleve.jpeg`,id:'3',
    
      },
      {
        image: '../Assets/mainpage/twenty7.jpeg',id:'1',
    
      },
      {
        image: `../Assets/mainpage/twenty9.jpeg`,id:'5'
    
      },
      {
        image: `../Assets/mainpage/thirteen.jpeg`,id:'2',
    
      },
    ],
  },
  {
    id: "slider1",
    class: "slider",
    heading: "comedies about friendship",
    nav_left: `<i class="fa-solid fa-caret-left"></i>`,
    nav_right: `<i class="fa-solid fa-caret-right"></i>`,
    sliderImages: [
      {
        image: `../Assets/mainpage/fifteen.jpeg`,id:'3',
    
      },
      {
        image: '../Assets/mainpage/fourteen.jpeg',id:'1'
    
      },
      {
        image: `../Assets/mainpage/seventeen.jpeg`,id:'4',
    
      },
      {
        image: `../Assets/mainpage/sixteen.jpeg`,id:'2',
    
      },
      {
        image: `../Assets/mainpage/eighteen.jpeg`,id:'3',
    
      },
      {
        image: `../Assets/mainpage/nineteen.jpeg`,id:'1'
    
      },
      { image: `../Assets/mainpage/twenty.jpeg`,id:'4'},
      {
        image: `../Assets/mainpage/twenty1.jpeg`,id:'3'
    
      },
      { image: `../Assets/mainpage/ten.jpeg`,id:'5'},
      {
        image: `../Assets/mainpage/thirteen.jpeg`,id:'2',
    
      },
      {
        image: `../Assets/mainpage/twenty6.jpeg`,id:'4'
    
      },
      {
        image: `../Assets/mainpage/twenty9.jpeg`,id:'5'
    
      },
    ],
  },
  {
    id: "slider1",
    class: "slider",
    heading: "hollywood movies",
    nav_left: `<i class="fa-solid fa-caret-left"></i>`,
    nav_right: `<i class="fa-solid fa-caret-right"></i>`,
    sliderImages: [
      {
        image: `../Assets/mainpage/twenty3.jpeg`,id:'1',
    
      },
      {
        image: `../Assets/mainpage/twenty4.jpeg`,id:'4',
    
      },
      {
        image: '../Assets/mainpage/twenty1.jpeg',id:'3'
    
      },
      {
        image: `../Assets/mainpage/twenty5.jpeg`,id:'5',
    
      },
      {
        image: `../Assets/mainpage/twenty6.jpeg`,id:'4'
    
      },
      {
        image: `../Assets/mainpage/twenty7.jpeg`,id:'1',
    
      },
      {
        image: `../Assets/mainpage/twenty8.jpeg`,id:'2',
    
      },
      {
        image: `../Assets/mainpage/tweleve.jpeg`,id:'3',
    
      },
      { image: `../Assets/mainpage/ten.jpeg`,id:'5'},
      {
        image: `../Assets/mainpage/thirteen.jpeg`,id:'2',
    
      },
      {
        image: `../Assets/mainpage/twenty6.jpeg`,id:'4'
    
      },
      {
        image: `../Assets/mainpage/twenty9.jpeg`,id:'5'
    
      },
    ],
  },
  {
    id: "slider1",
    class: "slider",
    heading: "documentaries",
    nav_left: `<i class="fa-solid fa-caret-left"></i>`,
    nav_right: `<i class="fa-solid fa-caret-right"></i>`,
    sliderImages: [
      {
        image: `../Assets/mainpage/nineteen.jpeg`,id:'1'
    
      },
      { image: '../Assets/mainpage/one.jpeg',id:'2'},
      { image: `../Assets/mainpage/six.jpeg`,id:'2'},
      {
        image: `../Assets/mainpage/fourteen.jpeg`,id:'1'
    
      },
      { image: `../Assets/mainpage/eight.jpeg`,id:'3'},
      { image: `../Assets/mainpage/nine.jpeg`,id:'4'},
      { image: `../Assets/mainpage/ten.jpeg`,id:'5'},
      { image: `../Assets/mainpage/eleven.jpeg`,id:"1"},
      {
        image: `../Assets/mainpage/thirteen.jpeg`,id:'2',
    
      },
      { image: `../Assets/mainpage/twenty.jpeg`,id:'4'},
      {
        image: `../Assets/mainpage/twenty1.jpeg`,id:'3'
    
      },
      { image: `../Assets/mainpage/five.jpeg`,id:'5'},
    ],
  },
    {
    id: "slider1",
    class: "slider",
    heading: "trending now",
    nav_left: `<i class="fa-solid fa-caret-left"></i>`,
    nav_right: `<i class="fa-solid fa-caret-right"></i>`,
    sliderImages: [
      { image: `../Assets/mainpage/eleven.jpeg`,id:"1"},
      {
        image: `../Assets/mainpage/twenty9.jpeg`,id:'5'
    
      },
      { image: `../Assets/mainpage/ten.jpeg`,id:'5'},
      { image: `../Assets/mainpage/twenty.jpeg`,id:'4'},
      {
        image: `../Assets/mainpage/twenty1.jpeg`,id:'3'
    
      },
      { image: `../Assets/mainpage/ten.jpeg`,id:'5'},
      {
        image: `../Assets/mainpage/twenty6.jpeg`,id:'4'
    
      },
      {
        image: `../Assets/mainpage/thirteen.jpeg`,id:'2',
    
      },
      {
        image: `../Assets/mainpage/tweleve.jpeg`,id:'3',
    
      },
      {
        image: '../Assets/mainpage/twenty7.jpeg',id:'1',
    
      },
      {
        image: `../Assets/mainpage/twenty.jpeg`,id:'4',
    
      },
      {
        image: `../Assets/mainpage/thirteen.jpeg`,id:'2',
    
      },
    ],
  },
];


// creating elements and injection process
const creatingElements = (slide) => {
  const parent = document.createElement("div");
  parent.setAttribute("class", slide.class);
  const heading = document.createElement("h2");
  heading.innerHTML = slide.heading;
  parent.appendChild(heading);
  heading.setAttribute("class", "heading");
  const images = document.createElement("div");
  images.setAttribute("class", "images");
  images.setAttribute("id", "images");
  slide.sliderImages.forEach((image) => {
    const image_parent = document.createElement("div");
    image_parent.setAttribute("id", "image-parent");
    const img=document.createElement('img')
    img.src=image.image
    img.id=image.id
    console.log(img)
    image_parent.appendChild(img)
    images.appendChild(image_parent);
  });
  parent.appendChild(images);
  slider.appendChild(parent);
  const navigation = document.createElement("div");
  navigation.setAttribute("class", "navigations");
  const nav_left = document.createElement("div");
  nav_left.setAttribute("id", "left");
  nav_left.innerHTML = slide.nav_left;
  const nav_right = document.createElement("div");
  nav_right.setAttribute("id", "right");
  nav_right.innerHTML = slide.nav_right;
  navigation.appendChild(nav_left);
  navigation.appendChild(nav_right);
  parent.appendChild(navigation);
};
// creating elements for top 10 movies
   const top_movies = (slide) => {
   let top_movies_number = 1;
    const top_movies_wrapper = document.createElement("div");
    const slider_parent = document.createElement("div");
    slider_parent.classList.add("top_inner_content");
    const movies_heading = document.createElement("h2");
    movies_heading.innerText = slide.heading;
    top_movies_wrapper.appendChild(movies_heading);
    slide.sliderImages.forEach((element) => {
    const top_movies_slider = document.createElement("div");
    top_movies_slider.classList.add(slide.class);
    const slider_content = document.createElement("div");
    slider_content.classList.add("images");
    top_movies_slider.appendChild(slider_content);
    const image = document.createElement("div");
    image.classList.add("image");
    slider_content.appendChild(image);
    const number = document.createElement("h1");
    number.innerHTML = top_movies_number;
    number.classList.add("number");
    image.appendChild(number);
    const number_image = document.createElement("div");
    const img=document.createElement("img")
    img.src=element.image
    number_image.appendChild(img)
    console.log(number_image)
    number_image.classList.add("image1");
    image.appendChild(number_image);
    const top_cont = document.createElement("div");
    top_cont.setAttribute("class", "#top_cont");
    top_cont.appendChild(top_movies_slider);
    slider_parent.appendChild(top_cont);
    top_movies_wrapper.classList.add("top_movies_wrapper");
    top_movies_wrapper.appendChild(slider_parent);
    top_movies_number++;
  });
  //  code for navigations of top 10 movies
  const navigations = document.createElement("div");
  navigations.classList.add("navigation");
  const right = document.createElement("div");
  const left = document.createElement("div");
  left.setAttribute("id", "left");
  left.innerHTML = slide.nav_left;
  navigations.appendChild(left);
  top_movies_wrapper.appendChild(navigations);
  slider.appendChild(top_movies_wrapper);
  right.setAttribute("id", "right");
  right.innerHTML = slide.nav_right;
  navigations.appendChild(right);
};
const slider = document.querySelector("#sliders");
sliders.map((slide) => {
  if (slide.class === "top-movies-slider") {
    top_movies(slide);
  } else {
    creatingElements(slide);
  }
});

const left = document.querySelectorAll("#left");
const right = document.querySelectorAll("#right");
const images = document.querySelector("#images");

left.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    const elem = element.parentElement.parentElement;
    // scroll logic for top 10 movies
    if (elem.id == "top_movies_wrapper") {
      elem.scrollLeft = elem.scrollLeft - 250;
    }
    // logic for other slides
    elem.children[1].scrollLeft = elem.children[1].scrollLeft - 257;
  });
});
right.forEach((element) => {
  const elem = element.parentElement.parentElement;
  element.addEventListener("click", (e) => {
    e.preventDefault();
    // scroll logic for top 10 movies
    if (elem.id == "top_movies_wrapper") {
      elem.scrollLeft = elem.scrollLeft + 250;
    }
    // logic for other slides
    elem.children[1].scrollLeft = elem.children[1].scrollLeft + 257;
  });
});
// for videoplayer

const tie=[]
const slides=document.querySelector("#sliders")
const img=slides.querySelectorAll('img')
img.forEach((image)=>{
  image.addEventListener('click',()=>{
       let Time=JSON.parse(window.localStorage.getItem('time'))
       Time||localStorage.setItem('time',JSON.stringify(tie))
       location.href=`./videoPlayer.html?id=${image.id}`
  
  })
  })










// const setCookieData=(id,value,exp)=>{
//   const d = new Date();
//   d.setTime(d.getTime() + (exp * 24 * 60 * 60 * 1000));
//   const expires = "expires=" + d.toUTCString();
//   document.cookie = id + "=" + value + ";" + expires + ";path=/";
 
// }
// const caretDown=document.querySelector("#caretDown")
// caretDown.addEventListener('click',()=>{
//   setCookieData('user','',0)
//   window.location.replace("../index.html")
// })