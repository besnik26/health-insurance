export class FormModel {
    public insuranceType?:string;
    public fullName?: string;
    public email?: string;
    public mobile?: string;
    public terms?: boolean;
    public carBrand?:boolean;
    public carPlacing?:boolean;
  
      constructor(data: {
        insuranceType?:string,
        fullName?: string,
        email?: string,
        mobile?:string,
        terms?:boolean,
        carBrand?:boolean
        carPlacing?:boolean
        }) {
        this.insuranceType = data.insuranceType;
        this.fullName = data.fullName;
        this.email = data.email;
        this.mobile = data.mobile;
        this.terms = data.terms;
        this.carBrand = data.carBrand;
        this.carPlacing = data.carPlacing;
    }  
}