class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
                HashMap<Character, Integer> map= new HashMap<Character, Integer>();
        
        for(int i=0;i<magazine.length();i++){
            Integer value = map.get(magazine.charAt(i));
            if(value != null){
                map.put(magazine.charAt(i),value+1);
            }else{
                map.put(magazine.charAt(i),1);
            }
        }
        
        for(int i=0;i<ransomNote.length();i++){
            Integer value = map.get(ransomNote.charAt(i));
            if(value == null || value == 0){
                return false;
            }else{
                map.put(ransomNote.charAt(i),value-1);
            }
        }
        
        for(Map.Entry m: map.entrySet()){
            System.out.println(m.getKey()+":  "+m.getValue());
        }
        return true;
    }
}