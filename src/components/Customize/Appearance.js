import React, { useState } from 'react';
import { FontButton, ThemeButton, ThemeContainer } from '../styles/ThemeSwitching.styled';
import { light, dark, green, brown, pink, blue, red, Purple, Cornflower } from '../styles/Theme.styled';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '../styles/ThemeContext'; // Correct the import
import { Link } from 'react-router-dom';
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'


const Appearance = () => {
  const { currentTheme, toggleTheme } = useTheme();

  const [selectedTheme, setSelectedTheme] = useState(light);

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    toggleTheme(theme);
    localStorage.setItem('current-theme', JSON.stringify(theme));
  };

  const handleRefreshClick = () => {
    window.location.reload(); // This line reloads the page
  };

  // ***************Picker*****************************

  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState({
    r: '241',
    g: '112',
    b: '19',
    a: '1',
  });

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (newColor) => {
    setColor(newColor.rgb);
  };

  const swatchStyle = {
    width: '50px',
    height: '50px',
    display: 'block',
    border: '4px solid var(--gray-color-200)',
    borderRadius: '2rem',
    margin: '7px 0px 6px 10px',
    background: `conic-gradient(
      cyan 0%,
      palegoldenrod 16.67%,
      lime 33.33%,
      red 50%,
      blue 66.67%,
      yellow 83.33%,
      orange 100%
    )`, 
    cursor: 'pointer',
  };

  const styles = reactCSS({
    'default': {
      color: swatchStyle, // Apply the modified swatch style here
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  });


  const PicheaderStyle = {
    color: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
    background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
  };

  const PicColor = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
  // **************************************************


  return (
    <ThemeProvider theme={selectedTheme}>
      <div className="appearance-cont">
        <div className='appearance-header'>
          <span>
            Appearance
          </span>

          <button className='apply-btn' onClick={handleRefreshClick}>Apply</button> {/* Use <button> instead of <Button> */}

        </div>
        <span>Themes: </span>

        <div className='theme-cont'>
          <ThemeContainer>
            <ThemeButton
              className={`light ${selectedTheme === light ? 'active' : ''}`}
              onClick={() => handleThemeChange(light)}
            ></ThemeButton>
            <ThemeButton
              className={`dark ${selectedTheme === dark ? 'active' : ''}`}
              onClick={() => handleThemeChange(dark)}
            ></ThemeButton>
            <ThemeButton
              className={`blue ${selectedTheme === blue ? 'active' : ''}`}
              onClick={() => handleThemeChange(blue)}
            ></ThemeButton>
            <ThemeButton
              className={`green ${selectedTheme === green ? 'active' : ''}`}
              onClick={() => handleThemeChange(green)}
            ></ThemeButton>
            <ThemeButton
              className={`brown ${selectedTheme === brown ? 'active' : ''}`}
              onClick={() => handleThemeChange(brown)}
            ></ThemeButton>
            <ThemeButton
              className={`pink ${selectedTheme === pink ? 'active' : ''}`}
              onClick={() => handleThemeChange(pink)}
            ></ThemeButton>
            <ThemeButton
              className={`red ${selectedTheme === red ? 'active' : ''}`}
              onClick={() => handleThemeChange(red)}
            ></ThemeButton>
            <ThemeButton
              className={`Purple ${selectedTheme === Purple ? 'active' : ''}`}
              onClick={() => handleThemeChange(Purple)}
            ></ThemeButton>
            <ThemeButton
              className={`Cornflower ${selectedTheme === Cornflower ? 'active' : ''}`}
              onClick={() => handleThemeChange(Cornflower)}
            ></ThemeButton>
          </ThemeContainer>
          <Link className='more-tmp-link'> <div>More</div></Link>
        </div>
        <div className='div-fonts'>

          <div className='' style={{ fontSize: "20px" }}>Fonts</div>

          <div>
            <div className='font-type-header'>basic</div>


            <span className='font-type' style={{ fontFamily: 'Young Serif', fontWeight: 'oblique' }}
              onClick={() => {
                document.getElementById('mobile-cont').style.cssText = 'font-family: "Young Serif" !important;font-style: oblique !important;';
              }}

            >
              Aa
            </span>
            <span className='font-type' style={{ fontFamily: ' AR One Sans ', fontWeight: '' }}
              onClick={() => {
                document.getElementById('mobile-cont').style.cssText = 'font-family: " AR One Sans " !important; '
              }}

            >
              Aa
            </span>
            <span className='font-type' style={{ fontFamily: ' Barlow ', fontWeight: 'bolder' }}
              onClick={() => {
                document.getElementById('mobile-cont').style.cssText = 'font-family: " Barlow " !important;font-style: bolder !important;';
              }}

            >
              Aa
            </span>
            <span className='font-type' style={{ fontFamily: ' Dancing Script ', fontWeight: 'italic' }}
              onClick={() => {
                document.getElementById('mobile-cont').style.cssText = 'font-family: " Dancing Script " !important; font-style: italic !important;';
              }}

            >
              Aa
            </span>
            <span className='font-type' style={{ fontFamily: ' Fjalla One ', fontWeight: 'bold' }}
              onClick={() => {
                document.getElementById('mobile-cont').style.cssText = 'font-family: " Fjalla One " !important;font-style: bold !important;';
              }}

            >
              Aa
            </span>




          </div>

          <div>
            <div className='font-type-header'>unique</div>


            <span className='font-type' style={{ fontFamily: 'cursive', fontWeight: 'bolder' }}

              onClick={() => { document.getElementById('mobile-cont').style.fontFamily = ' cursive ' }}

            >Aa</span>


            <span className='font-type' style={{ fontFamily: 'fantasy', fontWeight: 'bolder' }}
              onClick={() => {
                document.getElementById('mobile-cont').style.cssText = 'font-family: "fantasy" !important;';


              }}

            >
              Aa

            </span>


            <span className='font-type' style={{ fontFamily: 'sans-serif', fontWeight: 'bolder' }}

              onClick={() => {
                document.getElementById('mobile-cont').style.cssText = 'font-family: "sans-serif" !important;font-style: italic !important;';
              }}
            >
              Aa
            </span>


            <span className='font-type' style={{ fontFamily: 'Cambria, Cochin, Georgia, Times', fontWeight: 'bolder' }}

              onClick={() => {
                document.getElementById('mobile-cont').style.cssText = 'font-family: " Cambria, Cochin, Georgia, Times " !important;font-style: italic !important;';
              }}
            >
              Aa
            </span>


            <span className='font-type' style={{ fontFamily: 'cursive', fontWeight: 'bolder' }}
              onClick={() => {
                document.getElementById('mobile-cont').style.cssText = 'font-family: "cursive" !important;font-style: italic !important;';
              }}

            >
              Aa
            </span>




          </div>

          <div>
            <div className='font-type-header'>Text Color</div>
            <div className='font-type-cir-cont'>
            <div style={styles.swatch} onClick={handleClick}>
        <div style={styles.color} />
      </div>


      {displayColorPicker ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose} />
          <SketchPicker color={color} onChange={handleChange} />
        </div>
      ) : null}

      <span className='texxt-color-sw' style={PicheaderStyle}
      
            onClick={() => { document.getElementById('mobile-cont').style.color = PicColor }}

      >


      </span>

              <span className='texxt-color-sw' style={{ background: "#FFFFFF" }}
                onClick={() => { document.getElementById('mobile-cont').style.color = ' #FFFFFF ' }}

              >
              </span>
              <span className='texxt-color-sw' style={{ background: "black" }}
                onClick={() => { document.getElementById('mobile-cont').style.color = ' black ' }}

              >
              </span>
              <span className='texxt-color-sw' style={{ background: "gray" }}
                onClick={() => { document.getElementById('mobile-cont').style.color = ' gray ' }}

              >
              </span>
              <span className='texxt-color-sw' style={{ background: "blue" }}
                onClick={() => { document.getElementById('mobile-cont').style.color = ' blue ' }}

              >
              </span>
              <span className='texxt-color-sw' style={{ background: "brown" }}
                onClick={() => { document.getElementById('mobile-cont').style.color = ' brown ' }}

              >
              </span>
              <span className='texxt-color-sw' style={{ background: "red" }}
                onClick={() => { document.getElementById('mobile-cont').style.color = ' red ' }}

              >
              </span>
              <span className='texxt-color-sw' style={{ background: "green" }}
                onClick={() => { document.getElementById('mobile-cont').style.color = ' green ' }}

              >
              </span>
              <span className='texxt-color-sw' style={{ background: "#FFE5C1" }}
                onClick={() => { document.getElementById('mobile-cont').style.color = ' #FFE5C1 ' }}

              >
              </span>
              <span className='texxt-color-sw' style={{ background: "#E38CBA" }}
                onClick={() => { document.getElementById('mobile-cont').style.color = ' #E38CBA ' }}

              >
              </span>
              <span className='texxt-color-sw' style={{ background: "#19609C" }}
                onClick={() => { document.getElementById('mobile-cont').style.color = ' #19609C ' }}

              >
              </span>
              <span className='texxt-color-sw' style={{ background: "#51756B" }}
                onClick={() => { document.getElementById('mobile-cont').style.color = ' #51756B ' }}

              >
              </span>
              <span className='texxt-color-sw' style={{ background: "#897046" }}
                onClick={() => { document.getElementById('mobile-cont').style.color = ' #897046 ' }}

              >
              </span>
              <span className='texxt-color-sw' style={{ background: "#FFE5E7" }}
                onClick={() => { document.getElementById('mobile-cont').style.color = ' #FFE5E7 ' }}

              >
              </span>
              <span className='texxt-color-sw' style={{ background: "#EFE5C1" }}
                onClick={() => { document.getElementById('mobile-cont').style.color = ' #EFE5C1 ' }}

              >
              </span>
              

            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Appearance;
