# MySQL employee tracker

## Description
MySQL-Employee-Tracker is an interface command program that make it easy for non-developers to view and interact with information stored in databases. This interface is a good example of a Content Management Systems; a command line application for managing a company's employees using node, inquirer, and MySQL.

## Link to video walkthrough
https://drive.google.com/file/d/1LjUBMhjq2tq8av48zkIf-t9S2yKg6E9x/preview

## Technologies
<br/>MySql
<br/>Node.Js
<br/>Inquirer

## User Experience
A client can enter the program and maintain a database of employees

## Installation
npm install

## Usage
npm start

## Lessons and musings
This project was rather straightforward. My personal goal for this project was for the total program be as modulated as possible i.e. I wanted Add, View, Update in separate files for ease of future maintainance. This worked in general through module.exports. One huge issue I did face was I wound up in a promise loop that I could not figure my way out of. Eventually, the solution found was to send the original promptUser as a callback instead of requesting it as a promise. Tricky tricky. However, the tribulations of my journey did do a rather good job of cementing the principals of await/async and promise functions. 


