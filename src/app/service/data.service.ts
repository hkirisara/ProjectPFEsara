import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let  utilisateurs =  [
      {  id:  1,  cin:  '55545', prenom: "HAKI", nom: "sara",  telephone: 1, certification: 'souris' , adresse :"rue 1" ,email :"sara@gmail" ,role:"hujj" },
      {  id:  2,  cin:  '89898', prenom: "JADLAOUI", nom: "rah",  telephone: 2, certification: 'imprimante' , adresse :"rue 2" ,email :"rahm@gmail" ,role:"ggf" },
      {  id:  3,  cin:  '89895', prenom: "hk", nom: "masa",  telephone: 3, certification: 'pc' , adresse :"rue 3" ,email :"masa@gmail" ,role:"fff" },
      {  id:  4,  cin:  '89855', prenom: "makh", nom: "aouedi",  telephone: 4, certification: 'ecran' , adresse :"rue 4" ,email :"masa@gmail" ,role:"sss" },
   ];
   
   let  client =  [
    {  id:  5,  raisonsocial:  '1111', adresse: "rue1", ville: "tunis", telephone: 103, email: 'sara@gmail.com' ,tva :"oui" ,timbre :"yes" ,remise:"r1" },
    {  id:  6,  raisonsocial:  '222', adresse: "rue1", ville: "tunis1", telephone: 104, email: 'sara@gmail.com' ,tva :"oui" ,timbre :"yes" ,remise:"r2" },
    {  id:  7,  raisonsocial:  '333', adresse: "rue1", ville: "tunis2", telephone: 105, email: 'sara@gmail.com' ,tva :"oui" ,timbre :"yes" ,remise:"r3" },
    {  id:  8,  raisonsocial:  '444', adresse: "rue1", ville: "tunis3", telephone: 106, email: 'sara@gmail.com' ,tva :"pui" ,timbre :"yes" ,remise:"r4" },
   
   ];
   let  typemateriel =  [
    {  id:  9,  typemateriel:'pc' },
    {  id:  10,  typemateriel:'ecran' },
    {  id:  11,  typemateriel: 'imprimante' },
    {  id:  12,  typemateriel: 'modem' },
   
   ];
   let  marque =  [
    {  id:  13,  marque:'epson' },
    {  id:  14,  marque:'brother' },
    {  id:  15,  marque: 'dell' },
    {  id:  16,  marque: 'samsung' },
   
   ];
   let materiels = [
    typemateriel =  [
      {  id:  9,  typemateriel:'pc' },
      {  id:  10,  typemateriel:'ecran' },
      {  id:  11,  typemateriel: 'imprimante' },
      {  id:  12,  typemateriel: 'modem' },],

  marque =  [
    {  id:  13,  marque:'epson' },
    {  id:  14,  marque:'brother' },
    {  id:  15,  marque: 'dell' },
    {  id:  16,  marque: 'samsung' },],

    {  id:  17,  modele:'m1' },
    {  id:  18,  modele:'m2' },
    {  id:  19,  modele:'m3' },

   ];
   
   return {utilisateurs,client,typemateriel,marque,materiels};
  }

  
}
