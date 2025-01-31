import React, { useState, useEffect } from 'react';
import '../../bootstrap.min.css'
import classes from '../Moderation.module.css'
import mock from '../../mock.json'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'


function Listing(queue){
    let img
    mock.users.map((user) => {
        if(user.LoggedIn === 1){
            img = user.image
            return
        }
    }) 
    
    const [posts, setPosts] = useState();
    const [loading, setLoading] = useState(true);
    const [hiddenPosts, setHiddenPosts] = useState({});
  
    function GetUserName(id){
        let username = 5
        mock.users.map((user) => {
            if(user.id === id){
                username = user.name
                  return user.name
            }
        })
        return username
    }
    
    function GetUserImage(id){
        mock.users.map((user) => {
            if(user.id === id){
                console.log(566)
                 return user.image[0]  
            }
        })
    }

    useEffect(() => {
      const fetchData = () => {
        setTimeout(() => {
          setPosts(mock.communities[0]);
          setLoading(false);
        }, 1000);
      };
  
      fetchData();
  
      return () => {
        // Cleanup tasks if needed
      };
    }, []);
  

    if(queue + 1 === 1){
        return (
        <div >
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="">
            {posts.Banned.length === 0 ? (
              <p>No posts to display.</p>
            ) : (
              posts.Banned.map((item) => (
                !hiddenPosts[item.id] ? (
                  <div className={`row align- mt-1 ${classes.ModListBox}`}>
                        <div className='col-auto'>
                            <img  src={item.image} className={`${classes.BannedImg} mt-1 mb-1`} ></img>
                        </div>
                        <div className='col  bg-info'>
                            <span className='align-items-center'>{item.name}</span>
                        </div>
                    </div>
                
                ) : (
                  <div  className="hidden-post-card">
                    
                  </div>
                )
              ))
            )}
          </div>
        )}
      </div>
    )}else if(queue + 1 ===2){
        return (
            <div >
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div className="">
                {posts.Muted.length === 0 ? (
                  <p>No posts to display.</p>
                ) : (
                  posts.Muted.map((item) => (
                    !hiddenPosts[item.id] ? (
                        <div className={`row align- mt-1 ${classes.ModListBox}`}>
                        <div className='col-auto'>
                            <img  src={item.image} className={`${classes.BannedImg} mt-1 mb-1`} ></img>
                        </div>
                        <div className='col  bg-info'>
                            <span className='align-items-center'>{item.name}</span>
                        </div>
                    </div>
                    ) : (
                      <div  className="hidden-post-card">
                        
                      </div>
                    )
                  ))
                )}
              </div>
            )}
          </div>
        )
    }else if(queue+1 ===3){
        return (
            <div >
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div className="">
                {posts.Approved.length === 0 ? (
                  <p>No posts to display.</p>
                ) : (
                  posts.Approved.map((item) => (
                    !hiddenPosts[item.id] ? (
                        <div className={`row align- mt-1 ${classes.ModListBox}`}>
                        <div className='col-auto'>
                            <img  src={item.image} className={`${classes.BannedImg} mt-1 mb-1`} ></img>
                        </div>
                        <div className='col  bg-info'>
                            <span className='align-items-center'>{item.name}</span>
                        </div>
                    </div>
                    ) : (
                      <div  className="hidden-post-card">
                        
                      </div>
                    )
                  ))
                )}
              </div>
            )}
          </div>
        )
    }else if(queue+1 ===4){
        return (
            <div >
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div className="">
                {posts.Moderators.length === 0 ? (
                  <p>No posts to display.</p>
                ) : (
                  posts.Moderators.map((item) => (
                    !hiddenPosts[item.id] ? (
                        <div className={`row align- mt-1 ${classes.ModListBox}`}>
                        <div className='col-auto'>
                            <img  src={item.image} className={`${classes.BannedImg} mt-1 mb-1`} ></img>
                        </div>
                        <div className='col  bg-info'>
                            <span className='align-items-center'>{item.name}</span>
                        </div>
                    </div>
                    ) : (
                      <div  className="hidden-post-card">
                        
                      </div>
                    )
                  ))
                )}
              </div>
            )}
          </div>
        )
    }
}

export default function UserManagement(){
    const [button, setButton] = React.useState('Ban User')
    const [value, setValue] = React.useState(0)
    const [AddUser, setUser] = React.useState(false)
    const [toggle, setToggle] = React.useState(false)
    const [toggle1, setToggle1] = React.useState(false)
    const actArray = []
    const buttArray = []
    for(let i=0;i<4;i++){
        if(i === value){
            actArray.push(`${classes.actMenu} ${classes.QueueButtons}`)
        }else{
            actArray.push(`${classes.QueueButtons}`)
        }
    }

    const ChangeNewRule = event =>{
        setUser({name: event.target.value , image:"https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png"})
    }


    function AddNewUser(){
         if(button === 'Ban User'){
            if((AddUser === false)){ alert('Enter A user')
            }else{
                mock.communities[0].Banned.push(AddUser)}
        }
        if(button === 'Mute User'){
            if( (AddUser === false)){ alert('Enter A user')
            }else{
              mock.communities[0].Muted.push(AddUser)}
        }if(button === 'Approve User'){
            if((AddUser === false)){ alert('Enter A user')
            }else{
              mock.communities[0].Approved.push(AddUser)}
        }if(button === 'Invite user as mod'){
            if((AddUser === false)){ alert('Enter A user')
            }else{
              mock.communities[0].Moderators.push(AddUser)}
        }
    }
    return(
        <div className='container-fluid'>
            <div className='row'>
                <span className={`${classes.UserManagementHeader}`}>User Management</span>
            </div>
            <div className='row mt-3 '>
                <div className={`col-auto ${classes.QueueButtonDiv}`}>
                    <button className={actArray[0]} onClick={()=>{setButton('Ban User'); setValue(0); setToggle(false);setUser(false)}}><span>Banned</span></button>
                </div>
                <div className={`col-auto ${classes.QueueButtonDiv}`}>
                    <button className={actArray[1]} onClick={()=>{setButton('Mute User'); setValue(1); setToggle(false);setUser(false)}}><span>Muted</span></button>
                </div>
                <div className={`col-auto ${classes.QueueButtonDiv}`}>
                    <button className={actArray[2]} onClick={()=>{setButton('Approve User'); setValue(2); setToggle(false);setUser(false)}}><span>Approved</span></button>
                </div>
                <div className={`col-auto ${classes.QueueButtonDiv} `} onClick={()=>{setButton('Invite user as mod'); setValue(3);setToggle(!toggle);setUser(false)}} Toggle state>
                    <button className={actArray[3]}><span>Moderators</span></button>
                </div>
            </div>
            <div className='row  justify-content-end'>
                {toggle &&(<div className='col-auto d-flex'>
                    <div className='col-auto'>
                    <button type="button" class={`btn rounded-5 btn-light`}><span className={`${classes.SchedualeButton}`}>reorder</span></button>
                </div>
                <div className='col-auto'>
                    <button type="button" class={`btn rounded-5 btn-light`}><span className={`${classes.SchedualeButton}`}>Leave as mod</span></button>
                </div>
                </div>)}
                <div className='col-auto'>
                    <button type="button" class={`btn rounded-5 btn-primary`} onClick={()=>{setToggle1(!toggle1); AddNewUser()}}><span className={`${classes.SchedualeButton}`}>{button}</span></button>
                </div>
            </div>
            {toggle1 &&(<div className='row justify-content-end'>
                        <div className='row mt-2 justify-content-end'>
                            <input type="text" placeholder='' onChange={ChangeNewRule} className='col-6'></input>
                        </div>
                </div>)}
            {Listing(value)}
        </div>

    )
}