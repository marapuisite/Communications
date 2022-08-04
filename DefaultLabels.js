/* Copyright [2013-2022] Tasktop Technologies Incorporated.  All rights reserved.
 CONFIDENTIAL: The information contained in this document is the property of Tasktop Technologies Incorporated ("Tasktop").
 This document is for internal use only. Except as specifically authorized in writing by Tasktop, the holder of this document
 shall keep the information contained herein confidential and shall protect same in whole or in part from disclosure or dissemination
 to third parties. No part of the contents of this document may be reproduced or transmitted in any form or by any means without the
 expressed written permission of Tasktop.
 */
 
var inputTypes = 'Date Time';
var outputTypes = 'Multi Select';


function transform(context, input) {
var result
   var targetProj = context.targetRepositoryArtifact.project
 var labelMap= [
     {"project":"Another Mobile Project", "label":"AMOPLabel"},
     {"project":"Mobile Application", "label":"MALabel"}
     ]
 
  for each (var map in labelMap){
        if (map.project === targetProj){
            result =  map.label
        return result
            
        }
    }
return undefined
  
}
