# **[Tomislav Sokac](http://www.tomislavsokac.com/home)**

![Website Main Mockup]()

## Contents
* **[Design process](#Design-process)**
* **[Technologies used](#TECHNOLOGIES-USED)**
* **[Testing](#TESTING)**

****

### Design process

**1.** Draft basic UX sections:
* **[HOME](http://www.tomislavsokac.com/home)**
* **[PROFILE](http://www.tomislavsokac.com/profile)**
* **[EXPERIENCE](http://www.tomislavsokac.com/experience)**
* **[SKILLS](http://www.tomislavsokac.com/skills)**
* **[PROJECTS](http://www.tomislavsokac.com/projects)**

**2.** List all color pallets.

**3.** List all font styles for best UX, regarding user sub-pages details, main section icons, , and descriptions.

**4.** A list of free images from the free-image web platforms for each project section.

**5.** Draft web-page layout using Adobe Photoshop and Balsamiq for the main layout and Adobe Illustrator for layout components such as Logo, borders, navigation elements.

**6.** List possible Fowtawesome Icon for best UX in picture experiences and a draft of custom icons.

**7.** List Semantic Mark-up to structure HTML code.

**8.** List CSS folder structure for SASS Pre-processor configuration.

**[Back to content](#contents)**

****

# TECHNOLOGIES USED

## # [HTML](https://en.wikipedia.org/wiki/HTML)
**Semantic elements**: _nav_, _section_, _footer_, _div_(content division element), _span_(inline container), _i_ (text element).

## # [CSS3](https://en.wikipedia.org/wiki/CSS)
**Modules:** Borders, Background and text-effects, Flexible Box Layout, CSS Grid Layout, CSS Transitions, CSS Image Values & Replaced Content, CSS Values & Units.

## # [SASS PRE-PROCESSOR](https://sass-lang.com/)
**TOOLS INCLUDED:**
* SASS interpolation
* SASS Mixings - Responsive layout functions
* SASS Variables
* SASS Nesting
* SASS Compiler

**COMPILER IMPLEMENTATION:**
* Open Command Prompt
* Navigate to the root project folder
* Enter commands in the following order:
  * `npm init --yes` - **PRESS ENTER**
  * `npm i -g node-sass` - **PRESS ENTER**
  * In `{} package.json` file under the `"scripts"` type the **[FOLLOWING](https://github.com/tsokac2/newirishlife/blob/main/static/wireframes/sass_01.png)**
* To start **SASS Compiler** enter the following command: `npm run watch` - **PRESS ENTER**
* If no errors the compilation process _NPM SERVER_ will start with the following console log message:
    ```
    > new@1.0.0 watch C:\Users\Tomislav\Desktop\new
    > node-sass -o assets/css assets/scss/index.scss -w
    ```
**SASS IMPLEMENTATION AND FOLDER STRUCTURE**
* Create the following folder structure:
  * assets/scss/abstracts - global SASS **variables** and **mixins** function
  * assets/scss/base - global styles for html, body and special helper classes
  * assets/scss/components - carousel image slideshow, small screen navigation menu
  * assets/scss/layout - styling for _HOME_, _TRIP_, _WORK_, _LIFE_, _SHOP_, _SIGNUP_, _LOGIN_, _BAG_, _PRODUCT DETAILS_, _CHECKOUT_, _FOOTER_
  * assets/scss/_index.scss - referencing all `*.scss` files in folder structure, **[EXAMPLE](https://github.com/tsokac2/newirishlife/blob/main/static/wireframes/sass_02.png)**
  * **SASS RESPONSIVE Mixins** function **[EXAMPLE](https://github.com/tsokac2/newirishlife/blob/main/static/wireframes/sass_03.png)**
* All files in the above folders **MUST** be named with the following naming conventions: `_filename.scss`

**[Back to content](#contents)**

## # [NODE.JS](https://nodejs.org/en/)
* Use for NPM `package.json` file implementation into the project root

## # [NPM](https://www.npmjs.com/)
* Package manager - Use package - `node-sass`

## # [JAVASCRIPT](https://www.javascript.com/)

## # [ANGULAR JS](https://en.wikipedia.org/wiki/AngularJS)
* Routing a method that allows you to create Single Page Applications.

## # [JQUERY](https://fonts.google.com/)

## # [BOOTSTRAP v4.5.2](https://getbootstrap.com/docs/4.5/getting-started/introduction/)
* Bootstrap was used to assist with the responsiveness and styling of the website
* Mani layout control - responsive layout usage - helper classes included - example -  .mt, .pt, .d-none .d-md-block, .col, col-sm, col-md, col-lg, etc...

## # [GOOGLE CDN's](https://fonts.google.com/)
* Google Fonts - **[Merienda](https://fonts.google.com/specimen/Merienda?preview.text=&preview.text_type=custom&query=mer)**
* Google Fonts - **[Lato](https://fonts.google.com/?preview.text=&preview.text_type=custom&query=LATO)**
* Google Fonts - **[Josefin](https://fonts.google.com/specimen/Josefin+Sans?preview.text_type=custom)**

## # [FONTAWESOME](https://fontawesome.com/) 
* Use mostly for menu items and across projects elements

## # [GIT](https://git-scm.com/)
* Distributed version control system

## # [GITHUB](https://github.com/)
* Project files hosting platform

## # [IDE Visual Studio Code](https://code.visualstudio.com/)
* Project code editor 

## # [ADOBE PHOTOSHOP](https://www.adobe.com/)
* Images preparation - Logo Design

## # [ADOBE ILLUSTRATOR](https://www.adobe.com/)
* Logo Design 

## # [BALSAMIQ WIREFRAMES](https://balsamiq.com/) 
* Wireframes Design

## # [AM I Responsive?](http://ami.responsivedesign.is/)
* Multi-Device Website Mockup Generator was used to create the project Mockup image

## # [FileZilla](https://filezilla-project.org/)
*  It is open source software distributed free of charge under the terms of the GNU General Public License.

**[Back to content](#contents)**

****

# TESTING

### Strategy and planning
* Testing is required on all features and user stories documented in this README file.
* All clickable links must redirect to the correct pages and sections.
* HTML Code must pass through the **[W3C HTML Validator](https://validator.w3.org/#validate_by_uri)**.
* CSS Code must pass through the **[W3C CSS Validator](https://jigsaw.w3.org/css-validator/)**.
* JavaScript code must pass through the **[JSHint Validator](https://jshint.com/)**.

### Test Cases and Description

### Regression Testing
All features previously tested during development in a local environment must be regression tested in production on the live website.

### Assumptions and Dependencies
Testing is dependent on the website being deployed live on **[tomislavsokac.com](http://www.tomislavsokac.com)**

**[Back to content](#contents)**

****
