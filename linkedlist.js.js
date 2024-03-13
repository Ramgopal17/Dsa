// let reverseList=function (head,prev=null){
// if(!head){
//     return null
// }
// next=head.next
// head.next=prev
// return reverseList(next,head)
// }

// let middle=function (head){
//     let slow=head
//     let fast=head
//     while(fast && fast.next){
//         slow=slow.next
//         fast=fast.next.next
//     }
//     return slow

// }

// let palindrome=function (head){
//     if(head==null && head.next==null){
//         return true
//     }
//     let slow=head
//     let fast=head
//     while(fast && fast.next){
//         slow=slow.next
//         fast=fast.next.next
//     }
//     slow.next=reverseList(slow.next)
//     slow=slow.next
//     while(slow!=null){
//         if(head.val!=slow.val){
//             return false
//         }
//         head=head.next
//         slow=slow.next
//     }
//     return true

// }
// detect a loop in ll

// function loop(head){
//     if(head==null && head.next==null){
//         return false
//     }
//     let slow=head
//     let fast=head
//     while(fast && fast.next){
//         slow=slow.next
//         fast=fast.next.next
//         if(slow==fast){
//             reutrn false
//         }
//     }
//     return true
// }

//----------intersection of linked list

function intersection(headA,headB){
    let a=headA
    let b=headB
    if(a==null){
        a=headB
    }else{
        a=a.next
    }
    if(b==null){
        b=headA
    }else{
        b=b.next
    }
    return a
}