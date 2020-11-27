new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        tekst: "",
        tekstFraMorse: "",
        morsekode: "",
        morseFraTekst: "",
        oversættelse: "",
        result: ""

    },
    methods: {
        oversætForm() {
            if (this.oversættelse == "OversætTekst") {
                this.tekstFraMorse = true
            }
            else if (this.oversættelse == "OversætMorse") {
                this.tekstFraMorse == false
            }
        }
    }
})