import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

// ====== Grommet Imports ====== \\
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Hero from 'grommet/components/Hero';
import Box from 'grommet/components/Box';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Card from 'grommet/components/Card';
import Footer from 'grommet/components/Footer';




class Landing extends Component {
  constructor(){
    super();

  }

  render() {
    return(
      <div>
         <Header></Header>
          <Title>Landing Page</Title>
          <Hero></Hero>
         
          <Box>

          </Box>

        {/* <!-- start slipsum code --> */}

        <h1>Hold on to your butts</h1>
        <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead. </p>

        <h1>We happy?</h1>
        <p>Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens. Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos. Sicut zeder apathetic malus voodoo. Aenean a dolor plan et terror soulless vulnerum contagium accedunt, mortui iam vivam unlife. Qui tardius moveri, brid eof reanimator sed in magna copia sint terribiles undeath legionis. Alii missing oculis aliorum sicut serpere crabs nostram. Putridi braindead odores kill and infect, aere implent left four dead.</p>

        <h1>No, mother</h1>
        <p>Lucio fulci tremor est dark vivos magna. Expansis creepy arm yof darkness ulnis witchcraft missing carnem armis Kirkman Moore and Adlard caeruleum in locis. Romero morbo Congress amarus in auras. Nihil horum sagittis tincidunt, zombie slack-jawed gelida survival portenta. The unleashed virus est, et iam zombie mortui ambulabunt super terram. Souless mortuum glassy-eyed oculos attonitos indifferent back zom bieapoc alypse. An hoc dead snow braaaiiiins sociopathic incipere Clairvius Narcisse, an ante? Is bello mundi z?</p>

        {/* <!-- end slipsum code --> */}
      </div>
    )
  }
};

export default Landing;


