let kc={
    name:'kitchen',
    purpose:'cook',
    cookFood(food){
        console.log(`serving ${food} in ${this.name}`);
    },

};
kc.cookFood('maggi')