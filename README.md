# Foundry VTT Tables Repository

![Latest Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2Ffoundry-vtt-community%2Ftables%2Fmaster%2Fmodule.json&label=Latest%20Release&prefix=v&query=$.version&colorB=red&style=for-the-badge)
[![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Ffoundry_community_tables&colorB=006400&style=for-the-badge)](https://forge-vtt.com/bazaar#package=foundry_community_tables) 
[![Foundry Hub Endorsements](https://img.shields.io/endpoint?logoColor=white&url=https%3A%2F%2Fwww.foundryvtt-hub.com%2Fwp-json%2Fhubapi%2Fv1%2Fpackage%2Ffoundry_community_tables%2Fshield%2Fendorsements&style=for-the-badge)](https://www.foundryvtt-hub.com/package/foundry_community_tables/)

Foundry community-contributed tables are noted here and merged into the Foundry Community Tables module for ease of use.

## Installation

### Usage as a Module

You can now install this module automatically by specifying the following public module URL : 

`https://raw.githubusercontent.com/foundry-vtt-community/tables/main/module.json`

As GM go to the **Manage Modules** options menu in your **World Settings** tab then enable the **Foundry Community Tables** module.

This module adds all of the community tables as a Compendium Packs called **FVTT Community Tables**.

You can open these packs, right click and click on import the tables you want.

### Usage without the Module:
1. Download the `.json` file to your machine
2. Create a new rollable table in Foundry
3. Right click the table in the sidebar and click import
4. Import your `.json` file and celebrate

## FAQ

### Why are there no tables from DnDBeyond?
Most of those tables are property of Wizards of the Coast, however there is a wonderful script that you can use to create your own `.json` rollable table file to import into Foundry. See: [useful_scripts/DnDBeyond_extractor.js](useful_scripts/DnDBeyond_extractor.js)

### Macros
You may want to utilize macros with these rollable tables. Checkout [the foundry community macro repo](https://github.com/foundry-vtt-community/macros)

## Development/Contributing
To clone this repository, along with every table in it, use the following command:

```
git clone --recurse-submodules https://github.com/foundry-vtt-community/tables.git
```

You can make pull requests to add or update tables here: [https://github.com/foundry-vtt-community/tables/pulls](https://github.com/foundry-vtt-community/tables/pulls)

1. Navigate to the directory where you wish to add your file
2. Click on add file at the top
3. Name your file with a `.json` ending and paste your content and save (add details in the description field of your `.json` file)
4. Save the file and then open a pull request (GitHub should walk you through these steps)

If you have *multiple files that should be grouped together* and may use a macro, please create a new directory that houses everything and add a README.md file to the directory
