export class Nurse {
  id: number;
  username: string;
  email: string;
  active: boolean;
  registrationDate: Date;
  firstname: string;
  lastname: string;
  dateOfBirth: Date;
  address: string;
  phoneNumber: string;
  jmbg: string;
  professionalQualification: ProfessionalQualification;
  constructor() {
  }
}

export class ProfessionalQualification {
  id: number;
  name: string;
  description: string;
  constructor() {
  }
}
