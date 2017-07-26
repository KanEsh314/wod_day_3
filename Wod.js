function containsDuplicates(a)
{
  for(var i = 0; i <= a.length; i++)
  {
    for(var j = 1; j < i; j++)
      {
        if(a[i] == a[j+1])
        {
          return true;
        }
        else
        {
          return false;
        } 
      }
  }
}
document.write(containsDuplicates([3,1,3]));