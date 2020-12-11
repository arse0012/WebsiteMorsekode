import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index"



new Vue({
    el: "#app",
    data: {
        input_string: "",
        output_string: "",
        //der bruges localhost da rest-servicen ikk er på azure
        baseMorseInputURL: "http://localhost:56910/api/Morsestrings"
    },

    methods:{
        
            getTranslatedInput(){

                axios.get(this.baseMorseInputURL)
                .then((response: AxiosResponse<string>) => {
                    this.output_string = response.data
                })
                .catch((error: AxiosError) => {
                    alert(error.message) 
                })


            },
            

            translateInput(){
                let input_string = (document.getElementById("Input") as HTMLInputElement).value
                let baseMorseInputURL: string = this.baseMorseInputURL + "/" + input_string
                
                axios.get(baseMorseInputURL)
                .then((response: AxiosResponse<string>) => {
                    this.output_string = response.data
                })
                .catch((error: AxiosError) =>{
                    alert(error.message)
                })

                
            },

           

            clearOutAndInput(){
                this.input_string = "",
                this.output_string =  ""
            }

    }


})