Vue.createApp({
  data() {
    return {
	    japaneseFoods: [
        { name: "親子丼",price:850 },
        { name: "天ぷら定食",price:1200 },
        { name: "焼き魚定食",price:1000 },
      ]
	    WesteanFoods: [
        { name: "親子丼",price:850 },
        { name: "天ぷら定食",price:1200 },
        { name: "焼き魚定食",price:1000 },
      ]

    };
  }
}).mount("#app");