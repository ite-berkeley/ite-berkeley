---
title: Site Admin
date: '2021-08-27T00:00:00.000+00:00'
publish_date: '2021-08-27T00:00:00.000+00:00'
show_staff: false

---

# How to edit

The source code for the site is at <https://github.com/Transpo-Berkeley>.

Step 1 is to ask someone to add you to the Transpo-Berkeley GitHub organization.

Then, you can edit the site using Forestry at <https://forestry.io>.

Login using GitHub (create an account if you haven't yet), and then add transpo-berkeley.github.io to Forestry

You are now free to make any changes!

All changes will be synced to <https://transpo.berkeley.edu> via [an automated process :)](https://github.com/Transpo-Berkeley/transpo-berkeley.github.io/blob/master/.github/workflows/main.yml)

# About the Site

Built using Jekyll and Tailwind, using [Forestry: Belkirk template](https://github.com/forestryio-templates/belkirk-jekyll-demo/).

Outdated CSS has been stripped and more configuration files have been added to make changing themes and sections of the website easier.

UC Berkeley/OCF requires sites on the x.berkeley.edu domains to be hosted by the OCF. Therefore, the site editing and Jekyll processing happens on GitHub, then an SSH process is initiated to pull the built files into the OCF host.
