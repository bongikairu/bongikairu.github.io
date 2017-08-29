import React, {Component} from 'react';
import styled from 'styled-components'
import {Row, Col, Button, Image, Label} from 'react-bootstrap';
import {TransitionMotion, spring, presets} from 'react-motion';

// Work List

const Description = styled.div.attrs({
    className: 'description',
})``;
const Links = styled.div.attrs({
    className: 'links',
})``;
const LinkButton = styled(Button)`
    margin-right: 5px;
`;
const Footnote = styled.div.attrs({
    className: 'footnote',
})``;

const WorkList = [
    {
        title: "Iconic Encounter",
        imgUrl: "images/port-work-cover-icen.jpg",
        tags: ['tag-gamedev', 'tag-classwork'],
        data: (<div>
            <Description>
                <p>
                    Iconic Encounter is a fighting game with well-known character.
                    Join the fight with John Lennon, Audrey Hepburn, Teddy Roosevelt, or Mahatma Gandhi.
                    Aim at a casual gamer, control is simple for one to enjoy, yet deep enough for an
                    experienced player to benefit from.
                    Throw an opponent out of the stage, and victory shall be yours.
                </p>
                <p>
                    Iconic Encounter is a graduate-level capstone project.
                    It's developed by Katryna Check, Corey Kuchynka, Deandre Chenshaw, Joshua Servin, and
                    myself
                    under a supervision of <a href="http://www.brianschrank.com/">Asst Prof Brian Schrank,
                    PhD</a> .
                </p>
                <p> Contribution: Gameplay, Shader, and UI Programming</p>
            </Description>
            <Links>
                <LinkButton bsStyle="primary" href="http://www.quintforcedev.com/current-build">
                    Website
                </LinkButton>
                <LinkButton bsStyle="default" href="https://www.youtube.com/watch?v=9F8QeLj3BA8">
                    Video from Spring Showcase
                </LinkButton>
            </Links>
        </div>)
    }, {
        title: "DKS Digitalkeystore.co.th",
        imgUrl: "images/port-work-cover-dks.jpg",
        tags: ['tag-phphtmljs', 'tag-freelance'],
        data: (<div>
            <Description>
                <p>
                    Digitalkeystore is Thailand's number one game and gaming peripherals
                    online retailer. It uses many automated systems to reduce wasted time
                    on both customer and server side.
                    In 2013, I wrote a system that automated order fulfillment process.
                    As of now, I'm a part-time
                    Software Engineer overseeing website technical aspect.
                </p>
            </Description>
            <Links>
                <LinkButton bsStyle="primary" href="https://dks.in.th/">
                    Storefront
                </LinkButton>
                <LinkButton bsStyle="default" href="http://digitalkeystore.co.th/">
                    Corporate Site
                </LinkButton>
            </Links>
        </div>)
    }, {
        title: "Yearbeast Tracker",
        imgUrl: "images/port-work-cover-yearbeast.jpg",
        tags: ['tag-phphtmljs', 'tag-hobby'],
        data: (<div>
            <Description>
                <p> New Bloom is a yearly event in <a href="http://blog.dota2.com/">Dota 2</a> . In 2015,
                    this
                    event allows players to join a special game mode during
                    the year beast active time (20 minutes every 2-3 hours).
                    Yearbeast Tracker is built to solve many problems, namely
                </p>
                <ol>
                    <li>Allow estimate time of next year beast (became obsolete half-way through event)</li>
                    <li>Allow player to track the beast without opening Dota 2</li>
                    <li>Allow external services to benefit from tracking data (such as message alert to
                        phone)
                    </li>
                </ol>
                <p>
                    Through its lifespan of 3 weeks, it serves over 600,000 users with over
                    20 million page views (According to Google Analytics). The cost of this operation,
                    surprisingly, is under $50.
                </p>
            </Description>
            <Links>
                <LinkButton bsStyle="primary" href="http://2015.yearbeast.com/">
                    Main site
                </LinkButton>
                <LinkButton bsStyle="default" href="https://github.com/bongikairu/yearbeast2015">
                    Git Repo
                </LinkButton>
            </Links>
        </div>)
    }, {
        title: "iNoteSlide",
        imgUrl: "images/port-work-cover-inoteslide.jpg",
        tags: ['tag-phphtmljs', 'tag-classwork'],
        data: (<div>
            <Description>
                <p>
                    iNoteSlide is a cross-platform annotation sharing system aims to integrate technology
                    into
                    the ever-changing world of study. It gives students an option to take note directly on
                    learning
                    materials on their tablet computer. This system is developed with JavaScript, HTML, and
                    CSS,
                    and use PhoneGap as a base framework. It can be deployed on any tablet running iOS or
                    Android,
                    but requires connection to the server in order to do some task.
                </p>
                <p> This project is an undergrad-level capstone project. The development team consists of <a
                    href="https://th.linkedin.com/pub/attaphon-predaboon/42/684/211/th">Attaphon
                    Predaboon</a> ,
                    Sorawit Jaroenbenjawong, and myself under a supervision of <a
                        href="http://www.cp.eng.chula.ac.th/~somchai/index0.htm">Assoc Prof Dr. Somchai
                        Prasitjutrakul</a> .</p>
                <p> Contribution: Client side (HTML and Javascript), System Design</p>
            </Description>
            <Links>
                <LinkButton bsStyle="primary"
                            href="https://drive.google.com/file/d/0B9t-pfvf5EFpanFWX2laRGlYVjA/view?usp=sharing">
                    Presentation Slide
                </LinkButton>
            </Links>
        </div>)
    }, {
        title: "In-house Game Engine",
        imgUrl: "images/port-work-cover-engine.jpg",
        tags: ['tag-cppcs', 'tag-gamedev', 'tag-classwork'],
        data: (<div>
            <Description>
                <p>
                    In Ed Keenan's Game Engine class, students are given a task to build a full-fledged game
                    engine in C++.
                    It's composed of many subsystem, namely Math Engine (Vector, Matrix, and Quaternion),
                    Rendering System, and Object Manager.
                    Each part can be swapped in and out easily.
                </p>
                <p> In the second part of the class, students upgrade their engine to support loading of
                    models
                    with animation.</p>
            </Description>
            <Links>
                <LinkButton bsStyle="primary"
                            href="http://www.cdm.depaul.edu/academics/pages/classinfo.aspx?Term=20152&amp;ClassNbr=20192&amp;fid=718577">
                    Class Website
                </LinkButton>
                <LinkButton bsStyle="default" href="https://www.youtube.com/watch?v=YC8LyJmrKDw">
                    Presentation Video 1
                </LinkButton>
                <LinkButton bsStyle="default" href="https://www.youtube.com/watch?v=8p7cg4UDcKw">
                    Presentation Video 2
                </LinkButton>
            </Links>
        </div>)
    }, {
        title: "Network-enabled Omega Race",
        imgUrl: "images/port-work-cover-network.jpg",
        tags: ['tag-cppcs', 'tag-gamedev', 'tag-classwork'],
        data: (<div>
            <Description>
                <p>
                    In Ed Keenan's Game Networking class, students are tasked with converting an Omega Race
                    X
                    (ported version of <a href="http://en.wikipedia.org/wiki/Omega_Race">Omega Race</a> , an
                    arcade game by Midway)
                    into a network-enabled multiplayer game. It uses Windows Live for base networking.
                </p>
            </Description>
            <Links>
                <LinkButton bsStyle="primary"
                            href="http://www.cdm.depaul.edu/academics/pages/classinfo.aspx?Term=20143&amp;ClassNbr=30494&amp;fid=718577">Class
                    Website
                </LinkButton>
                <LinkButton bsStyle="default" href="https://www.youtube.com/watch?v=Y5MZ7-oLWcE">
                    Presentation Video
                </LinkButton>
            </Links>
        </div>)
    }, {
        title: "Optimization of C++ Particle System",
        imgUrl: "images/port-work-cover-particle.jpg",
        tags: ['tag-cppcs', 'tag-gamedev', 'tag-classwork'],
        data: (<div>
            <Description>
                <p>
                    In Ed Keenan's optimization class, students are given a particle system.
                    The goal is to make this particle system fast. Many technique is employed to solve this
                    problem, such as
                </p>
                <ol>
                    <li>Hot-Cold data structure</li>
                    <li>SIMD</li>
                    <li>Return Value Optimization</li>
                    <li>Implicit Conversion striping</li>
                    <li>Proxy Object</li>
                </ol>
                <p> The final product increase speed by 2x (10x for calculation). It renders a vortex of 20k
                    particles under 10 ms, with calculation taken only 1 ms.</p>
            </Description>
            <Links>
                <LinkButton bsStyle="primary"
                            href="http://www.cdm.depaul.edu/academics/pages/classinfo.aspx?Term=20151&amp;ClassNbr=17026&amp;fid=718577">
                    Class Website
                </LinkButton>
                <LinkButton bsStyle="default"
                            href="https://www.dropbox.com/s/zymd56dr7oj2ozl/GameParticles.rar?dl=0">
                    Final Project Executable Download
                </LinkButton>
            </Links>
        </div>)
    }, {
        title: "Web-based Valve's Source Model Viewer (WIP DOA)",
        imgUrl: "images/port-work-cover-flare.jpg",
        tags: ['tag-cppcs', 'tag-gamedev', 'tag-hobby'],
        data: (<div>
            <Description>
                <p>Web-based model viewer that accepts Valve's Source format (MDL, VVD, VMT, VTF). Written
                    in
                    C++
                    and converted to Asm.js using Emscripten.</p>
                <p className="text-danger"> Work in progress.</p>
            </Description>
            <Links>
                <LinkButton bsStyle="danger" href="http://104.236.208.106/app/raw.html">
                    Dev site
                </LinkButton>
            </Links>
        </div>)
    }, {
        title: "[VR] MockBand",
        imgUrl: "images/port-work-cover-mockband.jpg",
        tags: ['tag-gamedev', 'tag-classwork'],
        data: (<div>
            <Description>
                <p>
                    MockBand is a VR karaoke game. It uses both head tracking and audio input to provide
                    feedback in a virtual world.
                </p>
                <p> Contribution: Core Gameplay Programming (Voice detection, Head motion gameplay, and
                    Lyrics
                    sync syntax)</p>
            </Description>
            <Links>
                <LinkButton bsStyle="primary" href="https://www.youtube.com/watch?v=2NyhvdtCaCs">
                    Video
                </LinkButton>
                <LinkButton bsStyle="default"
                            href="https://www.dropbox.com/s/yboaup8747z84hy/Mockband-0.95.rar?dl=0">
                    Executable Download
                </LinkButton>
            </Links>
            <Footnote>
                <br/>
                <small>
                    This game is a part of <a href="http://brianschrank.com/vrgames/">VR Game class</a>
                </small>
            </Footnote>
        </div>)
    }, {
        title: "[VR] DayGround",
        imgUrl: "images/port-work-cover-dayground.jpg",
        tags: ['tag-gamedev', 'tag-classwork'],
        data: (<div>
            <Description>
                <p>
                    DayGround is a VR game that aims to provide alternate reality to the player. Its use of
                    vibrant color and lack of shadow
                    gives the player an unconventional experience.
                </p>
                <p> Contribution: Core Gameplay Programming</p>
            </Description>
            <Links>
                <LinkButton bsStyle="primary" href="https://www.youtube.com/watch?v=XnNrcCkM-UQ">
                    Video
                </LinkButton>
                <LinkButton bsStyle="default"
                            href="https://www.dropbox.com/s/yz64bekclpop8mm/DayGround-0.6-NoOVR.rar?dl=0">
                    Executable Download (Non-VR)
                </LinkButton>
            </Links>
            <Footnote>
                <br/>
                <small>
                    This game is a part of <a href="http://brianschrank.com/vrgames/">VR Game class</a>
                </small>
            </Footnote>
        </div>)
    }, {
        title: "[VR] Last night",
        imgUrl: "images/port-work-cover-lastnight.jpg",
        tags: ['tag-gamedev', 'tag-classwork'],
        data: (<div>
            <Description>
                <p>
                    Last Night is a VR game that aims to induce player into an altered state.
                    Player starts the game lying down. He or she will then wake up in this VR world
                    being sucked into a black hole in the sky. Player has an option to explore the
                    surrounding (by only moving his/her head). The game ends when player reaches the black
                    hole.
                </p>
                <p> Contribution: Core Gameplay Programming, Game Design</p>
            </Description>
            <Links>
                <LinkButton bsStyle="primary" href="http://youtu.be/xRgkkozEoqY">
                    Video
                </LinkButton>
                <LinkButton bsStyle="default"
                            href="https://www.dropbox.com/s/paw79qv9jjbggrg/LastNightBuild-1.0.zip?dl=0">
                    Executable Download
                </LinkButton>
            </Links>
            <Footnote>
                <br/>
                <small>
                    This game is a part of <a href="http://brianschrank.com/vrgames/">VR Game class</a>
                </small>
            </Footnote>
        </div>)
    }, {
        title: "[VR] Prey",
        imgUrl: "images/port-work-cover-prey.jpg",
        tags: ['tag-gamedev', 'tag-classwork'],
        data: (<div>
            <Description>
                <p>
                    Prey is a VR game that put players into an eye of wildlife. Player can choose to pose
                    either
                    a rabbit or an eagle.
                    There's no solid goal in this game.
                </p>
                <p> Contribution: Core Gameplay Programming</p>
            </Description>
            <Links>
                <LinkButton bsStyle="primary" href="https://www.youtube.com/watch?v=xyziS1Jqa48">
                    Video
                </LinkButton>
                <LinkButton bsStyle="default"
                            href="https://www.dropbox.com/s/8kkgf5n8gjxsd5s/PreyOut-1.1.zip?dl=0">
                    Executable Download
                </LinkButton>
            </Links>
            <Footnote>
                <br/>
                <small>
                    This game is a part of <a href="http://brianschrank.com/vrgames/">VR Game class</a>
                </small>
            </Footnote>
        </div>)
    }, {
        title: "[ART] Rend",
        imgUrl: "images/port-work-cover-rend.jpg",
        tags: ['tag-gamedev', 'tag-classwork'],
        data: (<div>
            <Description>
                <p>
                    Rend is a game that let a player controls the size of platforms they're in contact.
                    Player has to navigate the puzzle world using this trick to reach an exit.
                </p>
                <p> Contribution: Core Gameplay Programming</p>
            </Description>
            <Links>
                <LinkButton bsStyle="primary"
                            href="https://www.dropbox.com/s/8jtw0opldlmkzbr/Rend-v1.0final.zip?dl=0">
                    Executable Download
                </LinkButton>
            </Links>
            <Footnote>
                <br/>
                <small>
                    This game is a part of <a href="http://www.artgamedev.com/">Art Game class</a>
                </small>
            </Footnote>
        </div>)
    }, {
        title: "[ART] Sweatshop Hero",
        imgUrl: "images/port-work-cover-sweatshop.jpg",
        tags: ['tag-gamedev', 'tag-classwork'],
        data: (<div>
            <Description>
                <p>
                    Sweatshop Hero is about making money. Your employee, however, is still a human and their
                    performance drop over time.
                    You can motivate them to raise their performance, but this will reduce their happiness.
                    A worker with low happiness has a faster performance drop rate.
                    When their happiness reach the floor, they rebel.
                    Your only choice is that you kill them. However, their colleagues are not happy about
                    this.
                    And you know what will happen next...
                </p>
                <p> Contribution: Core Gameplay Programming</p>
            </Description>
            <Links>
                <LinkButton bsStyle="primary"
                            href="https://www.youtube.com/watch?v=f1ReduVsDYg">
                    Video
                </LinkButton>
                <LinkButton bsStyle="default"
                            href="https://www.dropbox.com/s/hot73jpmibb3q72/Sweatshop-v1.0final.zip?dl=0">
                    Executable Download
                </LinkButton>
            </Links>
            <Footnote>
                <br/>
                <small>
                    This game is a part of <a href="http://www.artgamedev.com/">Art Game class</a>
                </small>
            </Footnote>
        </div>)
    }, {
        title: "[ART] Insanity Out",
        imgUrl: "images/port-work-cover-insanity.jpg",
        tags: ['tag-gamedev', 'tag-classwork'],
        data: (<div>
            <Description>
                <p> The game of balance. Too many drugs and you die. Too little drugs and you also die.</p>
                <p> Contribution: Core Gameplay Programming, Game Design, Sound Design</p>
            </Description>
            <Links>
                <LinkButton bsStyle="primary" href="https://www.youtube.com/watch?v=eZzReLWqRPk">
                    Video
                </LinkButton>
                <LinkButton bsStyle="default"
                            href="https://www.dropbox.com/s/9czyqh6vyk2s2yd/InsanityOut-v1.0final.zip?dl=0">
                    Executable Download
                </LinkButton>
            </Links>
            <Footnote>
                <br/>
                <small>
                    This game is a part of <a href="http://www.artgamedev.com/">Art Game class</a>
                </small>
            </Footnote>
        </div>)
    }, {
        title: "[ART] Sarkhan",
        imgUrl: "images/port-work-cover-sarkhan.jpg",
        tags: ['tag-gamedev', 'tag-classwork'],
        data: (<div>
            <Description>
                <p>
                    You've become the prime minister of Sarkhan country. It's time to gain the money
                    you'd spent on election campaign back. You are given choices of campaigns to run.
                    Each one affects different groups of people and produces different amount of money.
                    Make the most before your reign ends!
                </p>
                <p> Contribution: (Solo project) Game Design, Gameplay and UI Programming</p>
            </Description>
            <Links>
                <LinkButton bsStyle="primary" href="https://www.youtube.com/watch?v=7N6CL1t6sYk">
                    Video
                </LinkButton>
                <LinkButton bsStyle="default"
                            href="https://www.dropbox.com/s/2m0ru5u8arospji/Sarkhan-Win32-Final.zip?dl=0">
                    Executable Download
                </LinkButton>
            </Links>
            <Footnote>
                <br/>
                <small>
                    This game is a part of <a href="http://www.artgamedev.com/">Art Game class</a>
                </small>
            </Footnote>
        </div>)
    }, {
        title: "[ART] Jet Drop",
        imgUrl: "images/port-work-cover-jetdrop.jpg",
        tags: ['tag-gamedev', 'tag-classwork'],
        data: (<div>
            <Description>
                <p>
                    Jet Drop is a game that let you control a prototype jet board with 4 thrusters.
                    On the controller, Right Shoulder, Left Shoulder, Right Analog Stick, and Left Analog
                    Stick
                    each control one thruster.
                    Your goal is to reach the bottom without slamming into the wall.
                </p>
                <p> Contribution: (Solo project) Game Design, Gameplay and UI programming</p>
            </Description>
            <Links>
                <LinkButton bsStyle="primary" href="https://www.youtube.com/watch?v=jUTPQrYE8-k">
                    Video
                </LinkButton>
                <LinkButton bsStyle="default"
                            href="https://www.dropbox.com/s/96sl6lrs8yolzpo/JetPackRace-v1.0final.zip?dl=0">
                    Executable Download
                </LinkButton>
            </Links>
            <Footnote>
                <br/>
                <small>
                    This game is a part of <a href="http://www.artgamedev.com/">Art Game class</a>
                </small>
            </Footnote>
        </div>)
    }, {
        title: "Last Stand, Mini Game Project for DKS Arcade",
        imgUrl: "images/port-work-cover-laststand.jpg",
        tags: ['tag-gamedev', 'tag-freelance'],
        data: (<div>
            <Description>
                <p>
                    Last Stand is a shoot-em-up survival style game. You shoot down an enemy ship before it
                    reaches you and kills you.
                    Special enemy spawns after player reach a certain point. If player still survives, the
                    difficulty increases and
                    the whole process is restarted.
                </p>
                <p> Contribution: (Solo project) Game Design, Gameplay and UI programming</p>
            </Description>
            <Links>
                <LinkButton bsStyle="primary" href="https://www.youtube.com/watch?v=5j8BAg4eFNk">
                    Video
                </LinkButton>
            </Links>
        </div>)
    }
];

// Page Template

const HeadtextSmall = styled.small`
	margin-left: 10px;
`;

const TitleRow = styled(Row).attrs({
    id: "title"
})``;

const FilterRow = styled(Row).attrs({
    id: "filter"
})`
`;

const Filter = styled(Col).attrs({
    md: 3
})`
    cursor: pointer;
    cursor: hand;
    opacity: ${props => props.filterActive ? '1.0' : '0.3'}
`;

const ResponsiveImage = styled(Image).attrs({
    responsive: true,
    src: props => props.src,
    alt: "",
})`
`;

const FilterButton = styled(Button).attrs({
    active: false
})`
    margin-left: 5px;
    opacity: ${props => props.filterActive ? '1.0' : '0.3'}
`;

const WorkLabel = styled(Label)`
    margin-left: 3px;
`;

const WorkBlock = styled.div.attrs({
    className: 'work'
})`
    margin-bottom: 3px;
    overflow: hidden;
`;

const Work = ({style, tags, imgUrl, title, data}) => (
    <WorkBlock style={style}>
        <Row>
            <Col md={2} xs={12}>
                <ResponsiveImage src={imgUrl}/>
            </Col>
            <Col md={10} xs={12}>
                <h3>{title}</h3>
                <div>
                    {tags.map(tag => (
                        {
                            'tag-phphtmljs': (
                                <WorkLabel key={tag} bsStyle="default">
                                    <span className="glyphicon glyphicon-cloud" aria-hidden="true"/>
                                    PHP, HTML, and JS
                                </WorkLabel>),
                            'tag-cppcs': (
                                <WorkLabel key={tag} bsStyle="warning">
                                    <span className="glyphicon glyphicon-tasks" aria-hidden="true"/>
                                    C++ and C#
                                </WorkLabel>),
                            'tag-gamedev': (
                                <WorkLabel key={tag} bsStyle="danger">
                                    <span className="glyphicon glyphicon-tower" aria-hidden="true"/>
                                    Game Development
                                </WorkLabel>),
                            'tag-professional': (
                                <WorkLabel key={tag} bsStyle="primary">
                                    <span className="glyphicon glyphicon-briefcase" aria-hidden="true"/>
                                    Professional Work
                                </WorkLabel>),
                            'tag-classwork': (
                                <WorkLabel key={tag} bsStyle="success">
                                    <span className="glyphicon glyphicon-education" aria-hidden="true"/>
                                    Classwork
                                </WorkLabel>),
                            'tag-hobby': (
                                <WorkLabel key={tag} bsStyle="info">
                                    <span className="glyphicon glyphicon-heart" aria-hidden="true"/>
                                    Hobby Project
                                </WorkLabel>),
                        }[tag]
                    ))}
                </div>
                {data}
            </Col>
        </Row>
    </WorkBlock>
);

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filter: null,
        }
    }

    updateFilter(name) {
        if (this.state.filter === name) {
            this.setState({
                filter: null
            });
        } else {
            this.setState({
                filter: name
            })
        }
        if (woopra) { // eslint-disable-line no-undef
            if (woopra) woopra.track("filter", { // eslint-disable-line no-undef
                ftag: name
            });
        }
    }

    render() {
        const filter = this.state.filter;
        return (
            <div className="container">
                <TitleRow>
                    <Col md={8} xs={12}>
                        <div className="page-header">
                            <h1 id="headtext">
                                Hello!
                                <HeadtextSmall>What kind of work you're looking for from my portfolio?</HeadtextSmall>
                            </h1>
                        </div>
                    </Col>
                    <Col md={4} xs={12} className="text-right">
                        <div className="visible-md-block visible-lg-block" style={{height: 50}}/>
                        <Button bsStyle="primary" className="btn-social btn-linkedin"
                                href="https://linkedin.com/in/snakasawek/">
                            <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            More professional works on linked.in
                        </Button>
                    </Col>
                </TitleRow>
                <FilterRow>
                    <Filter filterActive={filter === null || filter === 'tag-phphtmljs'}
                            onClick={() => this.updateFilter('tag-phphtmljs')}>
                        <Row>
                            <Col md={12} xs={3}>
                                <div className="visible-xs-block" style={{height: 20}}/>
                                <ResponsiveImage src="images/port-cover-html-2.jpg"/>
                            </Col>
                            <Col md={12} xs={9}>
                                <h2>Website</h2>
                                <p>
                                    PHP is a number one web development language.
                                    Together with HTML and Javascript, it brings the world of
                                    world wide web to its current state nowadays.
                                </p>
                            </Col>
                        </Row>
                    </Filter>
                    <Filter filterActive={filter === null || filter === 'tag-cppcs'}
                            onClick={() => this.updateFilter('tag-cppcs')}>
                        <Row>
                            <Col md={12} xs={3}>
                                <div className="visible-xs-block" style={{height: 20}}/>
                                <ResponsiveImage src="images/port-cover-cpp.jpg"/>
                            </Col>
                            <Col md={12} xs={9}>

                                <h2>C++ and C#</h2>
                                <p>
                                    Everyone knows that C++ is fast. But to achieve that speed,
                                    you need to dive deep into the unknown. C#, in the other hand,
                                    make many development techniques viable for an average programmer.
                                </p>
                            </Col>
                        </Row>
                    </Filter>
                    <Filter filterActive={filter === null || filter === 'tag-gamedev'}
                            onClick={() => this.updateFilter('tag-gamedev')}>
                        <Row>
                            <Col md={12} xs={3}>
                                <div className="visible-xs-block" style={{height: 20}}/>
                                <ResponsiveImage src="images/port-cover-game.jpg"/>
                            </Col>
                            <Col md={12} xs={9}>
                                <h2>Game Dev</h2>
                                <p>
                                    I love games, and that's why I choose to study game development.
                                    It's a midway between aesthetic and technological advancement.
                                    One can not make a great game that doesn't run,
                                    and one can not make a perfect game that doesn't appeal.
                                </p>
                            </Col>
                        </Row>
                    </Filter>
                    <Filter filterActive={filter === null || filter === 'tag-future'} onClick={() => {
                        window.location = "https://linkedin.com/in/snakasawek/"
                    }}>
                        <Row>
                            <Col md={12} xs={3}>
                                <div className="visible-xs-block" style={{height: 20}}/>
                                <ResponsiveImage src="images/port-cover-pro.jpg"/>
                            </Col>
                            <Col md={12} xs={9}>
                                <h2>Professional</h2>
                                <p>
                                    Explore how variety of technology being used in a professional
                                    manner to make a real-world applications that are robust,
                                    scalable, and future-proof. TL;DR: Python, Node.js, React, Redux
                                    are awesome!
                                </p>
                            </Col>
                        </Row>
                    </Filter>
                </FilterRow>
                <Row>
                    <Col md={12}>
                        Also:
                        <FilterButton bsStyle="primary" filterActive={filter === null || filter === 'tag-freelance'}
                                      onClick={() => this.updateFilter('tag-freelance')}>Freelance</FilterButton>
                        <FilterButton bsStyle="success" filterActive={filter === null || filter === 'tag-classwork'}
                                      onClick={() => this.updateFilter('tag-classwork')}>Classwork</FilterButton>
                        <FilterButton bsStyle="info" filterActive={filter === null || filter === 'tag-hobby'}
                                      onClick={() => this.updateFilter('tag-hobby')}>Hobby</FilterButton>
                    </Col>
                </Row>
                <hr/>
                <TransitionMotion
                    willEnter={() => ({maxHeight: 0, opacity: 1, marginBottom: 0})}
                    willLeave={() => ({maxHeight: spring(0), opacity: spring(0), marginBottom: spring(0)})}
                    defaultStyles={WorkList.map(work => ({
                        key: work.title,
                        style: {
                            maxHeight: 0,
                            opacity: 1,
                            marginBottom: 0
                        },
                        data: work
                    }))}
                    styles={WorkList.filter(work => filter === null || work.tags.indexOf(filter) >= 0).map(work => ({
                        key: work.title,
                        style: {
                            maxHeight: spring(window.innerWidth >= 992 ? 300 : 600, presets.gentle),
                            opacity: spring(1, presets.gentle),
                            marginBottom: spring(3, presets.gentle)
                        },
                        data: work
                    }))}
                >
                    {styles => (
                        <div>
                            {styles.map(({key, style, data: work}) => (
                                <Work key={key} style={style} {...work} />
                            ))}
                        </div>
                    )}
                </TransitionMotion>
                <hr/>
                <footer>
                    By the way, this website is also in HTML and JS Category. It's written using React.
                    You can <a href="https://github.com/bongikairu/bongikairu.github.io">read its source here</a><br/>
                    For more information, contact me at <a href="mailto:sutas@kennyzero.me">sutas@kennyzero.me</a>
                </footer>
                <br/>
            </div>
        );
    }
}

export default App;
